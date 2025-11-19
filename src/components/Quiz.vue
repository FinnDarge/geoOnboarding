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

const submit = () => {
  const questions = quiz.value.questions || [];
  if (!questions.length) {
    submitted.value = true;
    score.value = 0;
    return;
  }
  let correct = 0;
  questions.forEach((question, index) => {
    if (selections[index] === question.answer) {
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
</script>

<template>
  <div class="quiz">
    <h3>{{ quiz.title }}</h3>
    <form class="quiz__list" @submit.prevent="submit">
      <div v-for="(question, index) in quiz.questions" :key="index" class="quiz__question">
        <p>{{ index + 1 }}. {{ question.question }}</p>
        <label v-for="(option, optionIndex) in question.options" :key="optionIndex" class="quiz__option">
          <input type="radio" :name="`q-${index}`" :value="optionIndex" v-model="selections[index]" />
          <span>{{ option }}</span>
        </label>
      </div>
      <button class="primary-btn" type="submit">Submit quiz</button>
    </form>
    <p v-if="submitted" class="quiz__result">Score: {{ score }}%</p>
    <p v-if="submitted && score >= 70" class="quiz__result quiz__result--success">Great job! Lesson marked as complete.</p>
    <p v-else-if="submitted" class="quiz__result quiz__result--warning">Aim for at least 70% to pass.</p>
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
}

.quiz__option {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 6px 0;
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
</style>
