<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(['close']);

const currentSlide = ref(0);
const totalSlides = 4;

const slides = [
  {
    icon: '🚀',
    title: 'Willkommen in der Onboarding Academy!',
    description: 'Deine Reise zum Geo-Entwickler bei Dataport beginnt hier. Lerne in deinem eigenen Tempo und sammle Abzeichen auf dem Weg.',
    features: [
      { emoji: '📚', text: 'Grundlagen-Track: JavaScript, Vue.js & Geo-Basics' },
      { emoji: '⚡', text: 'Spezialisierung: Masterportal oder POLAR Framework' },
      { emoji: '🎯', text: 'Capstone-Projekt: Zeig dein Können!' }
    ]
  },
  {
    icon: '📖',
    title: 'Vielfältige Lernformate',
    description: 'Jedes Modul bietet unterschiedliche Lesson-Typen für abwechslungsreiches Lernen.',
    features: [
      { emoji: '📝', text: 'Markdown-Inhalte: Strukturierte Lerntexte' },
      { emoji: '❓', text: 'Quizzes: Teste dein Wissen (70% zum Bestehen)' },
      { emoji: '✅', text: 'Task-Listen: Praktische Aufgaben zum Abhaken' },
      { emoji: '🗺️', text: 'Geo-Playgrounds: Interaktive Karten-Demos' }
    ]
  },
  {
    icon: '🏆',
    title: 'Achievements & Fortschritt',
    description: 'Verfolge deinen Fortschritt und schalte Abzeichen frei, während du lernst.',
    features: [
      { emoji: '🎖️', text: '9 Abzeichen zum Freischalten (Module & Tracks)' },
      { emoji: '📊', text: 'Progress-Tracking für jedes Modul' },
      { emoji: '🎉', text: 'Badge-Benachrichtigungen bei Erfolgen' },
      { emoji: '💾', text: 'Automatische Speicherung deines Fortschritts' }
    ]
  },
  {
    icon: '🎓',
    title: 'Los geht\'s!',
    description: 'Alles bereit? Starte mit dem Dashboard und wähle deinen ersten Track.',
    features: [
      { emoji: '🏠', text: 'Dashboard: Übersicht & Track-Auswahl' },
      { emoji: '📚', text: 'Module: Lessons & Seitennavigation' },
      { emoji: '🏅', text: 'Achievements: Deine Badge-Sammlung' },
      { emoji: '👥', text: 'Team: Deine Ansprechpartner bei Fragen' }
    ]
  }
];

const currentSlideData = computed(() => slides[currentSlide.value]);
const isFirstSlide = computed(() => currentSlide.value === 0);
const isLastSlide = computed(() => currentSlide.value === totalSlides - 1);

const nextSlide = () => {
  if (!isLastSlide.value) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (!isFirstSlide.value) {
    currentSlide.value--;
  }
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const closeModal = () => {
  store.commit('user/markIntroSeen');
  emit('close');
};

const skipIntro = () => {
  closeModal();
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-backdrop" @click.self="skipIntro">
        <div class="modal-content">
          <div class="modal-header">
            <div class="slide-indicator">
              <span 
                v-for="index in totalSlides" 
                :key="index"
                class="dot"
                :class="{ active: index - 1 === currentSlide }"
                @click="goToSlide(index - 1)"
              ></span>
            </div>
            <button class="modal-close" @click="skipIntro" aria-label="Überspringen">×</button>
          </div>
          
          <div class="modal-body">
            <Transition name="slide" mode="out-in">
              <div :key="currentSlide" class="slide-content">
                <div class="slide-icon">{{ currentSlideData.icon }}</div>
                <h2 class="slide-title">{{ currentSlideData.title }}</h2>
                <p class="slide-description">{{ currentSlideData.description }}</p>
                
                <ul class="feature-list">
                  <li 
                    v-for="(feature, index) in currentSlideData.features" 
                    :key="index"
                    class="feature-item"
                  >
                    <span class="feature-emoji">{{ feature.emoji }}</span>
                    <span class="feature-text">{{ feature.text }}</span>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
          
          <div class="modal-footer">
            <button 
              v-if="!isFirstSlide"
              class="btn-secondary" 
              @click="prevSlide"
            >
              ← Zurück
            </button>
            <div class="spacer"></div>
            <button 
              v-if="!isLastSlide"
              class="btn-primary" 
              @click="nextSlide"
            >
              Weiter →
            </button>
            <button 
              v-else
              class="btn-primary" 
              @click="closeModal"
            >
              Jetzt starten! 🚀
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  background: linear-gradient(135deg, rgba(30, 30, 50, 0.98), rgba(20, 20, 40, 0.98));
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6), 0 0 50px rgba(34, 197, 94, 0.25);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.slide-indicator {
  display: flex;
  gap: 10px;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.2);
}

.dot.active {
  background: var(--color-accent);
  width: 32px;
  border-radius: 5px;
  transform: scale(1);
}

.modal-close {
  background: none;
  border: none;
  font-size: 32px;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s ease, color 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text);
}

.modal-body {
  padding: 40px 32px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide-content {
  text-align: center;
}

.slide-icon {
  font-size: 72px;
  margin-bottom: 20px;
  animation: floatIcon 3s ease-in-out infinite;
}

.slide-title {
  margin: 0 0 16px 0;
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent), #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
}

.slide-description {
  margin: 0 0 32px 0;
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 520px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  text-align: left;
}

.feature-item:hover {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  transform: translateX(6px);
}

.feature-emoji {
  font-size: 24px;
  flex-shrink: 0;
}

.feature-text {
  font-size: 15px;
  color: var(--color-text);
  line-height: 1.4;
}

.modal-footer {
  padding: 20px 28px 28px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.spacer {
  flex: 1;
}

.btn-primary,
.btn-secondary {
  padding: 12px 28px;
  border: none;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-primary {
  background: var(--color-accent);
  color: #0f172a;
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-secondary:active {
  transform: scale(0.96);
}

/* Animations */
@keyframes floatIcon {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content {
  transform: scale(0.9) translateY(30px);
}

.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(-20px);
}

/* Slide transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Responsive */
@media (max-width: 640px) {
  .modal-content {
    max-width: 100%;
  }

  .modal-body {
    padding: 30px 20px;
    min-height: 380px;
  }

  .slide-icon {
    font-size: 56px;
  }

  .slide-title {
    font-size: 24px;
  }

  .slide-description {
    font-size: 15px;
  }

  .feature-item {
    padding: 12px 16px;
    gap: 12px;
  }

  .feature-emoji {
    font-size: 20px;
  }

  .feature-text {
    font-size: 14px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
