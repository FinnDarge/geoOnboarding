<script setup>
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  quizId: {
    type: String,
    required: true
  },
  moduleId: {
    type: String,
    required: true
  },
  lessonId: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['passed']);

const store = useStore();

const quizFiles = import.meta.glob('../data/quiz/*.json', { eager: true });

const quiz = computed(() => {
  const file = quizFiles[`../data/quiz/${props.quizId}.json`];
  return file?.default || { title: 'Quiz', questions: [] };
});

const selections = reactive({});
const submitted = ref(false);
const score = ref(0);
const results = reactive({});

const canSubmit = computed(() => {
  const questions = quiz.value.questions || [];
  return questions.every((_, index) => selections[index] !== undefined);
});

const submit = () => {
  const questions = quiz.value.questions || [];
  if (!questions.length) {
    submitted.value = true;
    score.value = 0;
    return;
  }
  let correct = 0;
  questions.forEach((question, index) => {
    const isCorrect = selections[index] === question.answer;
    results[index] = isCorrect;
    if (isCorrect) {
      correct += 1;
    }
  });
  score.value = Math.round((correct / questions.length) * 100);
  submitted.value = true;
  store.commit('quiz/saveResult', {
    quizId: props.quizId,
    score: score.value,
    total: questions.length
  });
  if (score.value >= 70) {
    store.commit('progress/completeLesson', {
      moduleId: props.moduleId,
      lessonId: props.lessonId
    });
    emit('passed');
  }
};

const retryFailedQuestions = () => {
  const questions = quiz.value.questions || [];
  questions.forEach((question, index) => {
    if (results[index] === false) {
      delete selections[index];
      delete results[index];
    }
  });
  submitted.value = false;
  score.value = 0;
};
</script>

<template>
  <div class="quiz">
    <h3>{{ quiz.title }}</h3>
    <form class="quiz__list" @submit.prevent="submit">
      <div 
        v-for="(question, index) in quiz.questions" 
        :key="index" 
        class="quiz__question"
        :class="{
          'quiz__question--correct': results[index] === true,
          'quiz__question--incorrect': submitted && results[index] === false
        }"
      >
        <p class="quiz__question-text">
          {{ index + 1 }}. {{ question.question }}
          <span v-if="results[index] === true" class="quiz__indicator quiz__indicator--correct">✓</span>
          <span v-if="submitted && results[index] === false" class="quiz__indicator quiz__indicator--incorrect">✗</span>
        </p>
        <label 
          v-for="(option, optionIndex) in question.options" 
          :key="optionIndex" 
          class="quiz__option"
          :class="{
            'quiz__option--selected': selections[index] === optionIndex,
            'quiz__option--correct': results[index] === true && optionIndex === question.answer,
            'quiz__option--incorrect': submitted && selections[index] === optionIndex && optionIndex !== question.answer
          }"
        >
          <input 
            type="radio" 
            :name="`q-${index}`" 
            :value="optionIndex" 
            v-model="selections[index]"
            :disabled="submitted || results[index] === true"
          />
          <span>{{ option }}</span>
        </label>
      </div>
      <button class="primary-btn" type="submit" :disabled="submitted || !canSubmit">
        {{ submitted ? 'Quiz abgeschlossen' : 'Quiz absenden' }}
      </button>
      <p v-if="!canSubmit && !submitted" class="quiz__warning">Bitte beantworte alle Fragen, bevor du das Quiz absendest.</p>
    </form>
    <div v-if="submitted" class="quiz__results">
      <p class="quiz__result">Punktzahl: {{ score }}%</p>
      <p v-if="score >= 70" class="quiz__result quiz__result--success">Gut gemacht! Lektion als abgeschlossen markiert.</p>
      <p v-else class="quiz__result quiz__result--warning">Du benötigst mindestens 70% zum Bestehen. Versuche die fehlgeschlagenen Fragen erneut!</p>
      <button v-if="score < 70" @click="retryFailedQuestions" class="ghost-btn">Fehlgeschlagene Fragen wiederholen</button>
    </div>
  </div>
</template>

<style scoped>
.quiz__list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.quiz__question {
  padding: 16px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.quiz__question--correct {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
}

.quiz__question--incorrect {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

.quiz__question-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.quiz__indicator {
  font-size: 18px;
  font-weight: bold;
}

.quiz__indicator--correct {
  color: #22c55e;
}

.quiz__indicator--incorrect {
  color: #ef4444;
}

.quiz__option {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.quiz__option:hover:not(.quiz__option--correct):not(.quiz__option--incorrect) {
  background: rgba(255, 255, 255, 0.05);
}

.quiz__option--correct {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  font-weight: 600;
}

.quiz__option--incorrect {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

.quiz__option input:disabled {
  cursor: not-allowed;
}

.primary-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.quiz__result {
  margin-top: 12px;
}

.quiz__result--success {
  color: var(--color-accent);
}

.quiz__result--warning {
  color: #fbbf24;
}

.quiz__warning {
  color: #fbbf24;
  font-size: 14px;
  margin-top: -6px;
}

.quiz__results {
  margin-top: 20px;
  padding: 16px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ghost-btn {
  align-self: flex-start;
}
</style>
