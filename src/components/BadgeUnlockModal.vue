<script setup>
import { computed, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { getBadgeById } from '../data/badges';

const store = useStore();
const showModal = ref(false);
const currentBadge = ref(null);

const lastEarnedBadgeId = computed(() => store.getters['badges/lastEarnedBadge']);

// Watch for new badge unlocks
watch(lastEarnedBadgeId, (badgeId) => {
  if (badgeId) {
    const badge = getBadgeById(badgeId);
    if (badge) {
      currentBadge.value = badge;
      showModal.value = true;
    }
  }
});

const closeModal = () => {
  if (currentBadge.value) {
    store.commit('badges/markBadgeViewed', currentBadge.value.id);
  }
  showModal.value = false;
  currentBadge.value = null;
};

const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showModal && currentBadge" class="modal-backdrop" @click="handleBackdropClick">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">🎉 Badge Unlocked!</h2>
            <button class="modal-close" @click="closeModal" aria-label="Close">×</button>
          </div>
          
          <div class="modal-body">
            <div class="badge-display">
              <img :src="currentBadge.image" :alt="currentBadge.name" class="badge-image" />
            </div>
            <h3 class="badge-name">{{ currentBadge.name }}</h3>
            <p class="badge-description">{{ currentBadge.description }}</p>
          </div>
          
          <div class="modal-footer">
            <button class="btn-primary" @click="closeModal">Awesome!</button>
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
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  background: linear-gradient(135deg, rgba(30, 30, 50, 0.95), rgba(20, 20, 40, 0.95));
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  max-width: 450px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(34, 197, 94, 0.2);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent), #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  padding: 32px 24px;
  text-align: center;
}

.badge-display {
  width: 160px;
  height: 160px;
  margin: 0 auto 24px;
  animation: badgeUnlock 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}

.badge-display::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.badge-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 16px rgba(34, 197, 94, 0.4));
  position: relative;
  z-index: 1;
}

.badge-name {
  margin: 0 0 12px 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
}

.badge-description {
  margin: 0;
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.modal-footer {
  padding: 16px 24px 24px;
  display: flex;
  justify-content: center;
}

.btn-primary {
  padding: 12px 32px;
  background: var(--color-accent);
  color: #0f172a;
  border: none;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4);
}

.btn-primary:active {
  transform: scale(0.98);
}

/* Animations */
@keyframes badgeUnlock {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  60% {
    transform: scale(1.15) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
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
  transform: scale(0.8) translateY(20px);
}

.modal-leave-to .modal-content {
  transform: scale(0.9) translateY(-10px);
}
</style>
