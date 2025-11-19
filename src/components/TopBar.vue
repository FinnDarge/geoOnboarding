<script setup>
const props = defineProps({
  title: {
    type: [String, Object],
    default: 'Dashboard'
  },
  userName: {
    type: [String, Object],
    default: 'Nachwuchskraft'
  }
});
</script>

<template>
  <header class="topbar">
    <div class="topbar__title">{{ props.title }}</div>
    <div class="topbar__user">
      <div class="avatar">{{ String(props.userName).charAt(0) }}</div>
      <span>{{ props.userName }}</span>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(15, 23, 42, 0.85);
  position: sticky;
  top: 0;
  z-index: 10;
}

.topbar__title {
  font-size: 20px;
  font-weight: 600;
}

.topbar__user {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-muted);
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-accent);
  display: grid;
  place-items: center;
  font-weight: 700;
}
</style>
