<script setup>
import { ref } from 'vue';

const teamMembers = [
  { name: 'Dr. Christian Zirkelbach', role: 'Gruppenleiter', initials: 'CZ', image: '/src/data/img/zirkelbach.png', email: 'christian.zirkelbach@dataport.de' },
  { name: 'Carina Brühl', role: 'Entwicklerin', initials: 'CB', email: 'carina.bruehl@dataport.de' },
  { name: 'Finn-Rasmus Darge', role: 'Entwickler', initials: 'FD', image: '/src/data/img/darge.png', email: 'finn-rasmus.darge@dataport.de' },
  { name: 'Leonard Dietrich', role: 'Softwaretester', initials: 'LD', email: 'leonard.dietrich@dataport.de' },
  { name: 'Konstantin Holm', role: 'Entwickler', initials: 'KH', email: 'konstantin.holm@dataport.de' },
  { name: 'Melanie Michaela Klamp', role: 'Entwicklerin', initials: 'MK', email: 'melaniemichaela.klamp@dataport.de' },
  { name: 'Martina Niese', role: 'Entwicklerin', initials: 'MN', email: 'martina.niese@dataport.de' },
  { name: 'Hendrik Oenings', role: 'Entwickler', initials: 'HO', email: 'hendrik.oenings@dataport.de' },
  { name: 'Michel René Ptak', role: 'Entwickler', initials: 'MP', email: '' },
  { name: 'Judith Rasch', role: 'Entwicklerin (Vertretung von Christian)', initials: 'JR', email: 'judith.rasch@dataport.de' },
  { name: 'Markus Rullkötter', role: 'Entwickler', initials: 'MR', email: 'markus.rullkoetter@dataport.de' },
  { name: 'Pascal Röhling', role: 'Entwickler', initials: 'PR', image: '/src/data/img/röhling.png', email: 'pascal.roehling@dataport.de' },
  { name: 'Dennis Sen', role: 'Entwickler', initials: 'DS', image: '/src/data/img/sen.png', email: 'dennis.sen@dataport.de' }
];

const hoveredCard = ref(null);
const copiedEmail = ref(null);

const copyEmail = async (email) => {
  try {
    await navigator.clipboard.writeText(email);
    copiedEmail.value = email;
    setTimeout(() => {
      copiedEmail.value = null;
    }, 2000);
  } catch (err) {
    console.error('Fehler beim Kopieren:', err);
  }
};
</script>

<template>
  <div class="team">
    <section class="card team__header">
      <div>
        <p class="eyebrow">Lerne das Team kennen 👥</p>
        <h1>Deine Kolleg:innen</h1>
        <p class="muted">
          Lerne die Menschen kennen, mit denen du zusammenarbeiten wirst. Unser Team vereint Entwickler:innen, Tester:innen und Führungskräfte, um innovative Geo-Anwendungen zu entwickeln. Zögere nicht, dich zu melden — alle sind hier, um dir zum Erfolg zu verhelfen.
        </p>
      </div>
    </section>

    <section class="team__grid">
      <div 
        v-for="(member, index) in teamMembers" 
        :key="member.name" 
        class="team-card card"
        :style="{ animationDelay: `${index * 0.05}s` }"
        @mouseenter="hoveredCard = member.name"
        @mouseleave="hoveredCard = null"
      >
        <div class="team-card__avatar" :class="{ 'team-card__avatar--image': member.image }">
          <img v-if="member.image" :src="member.image" :alt="member.name" />
          <span v-else>{{ member.initials }}</span>
        </div>
        <div class="team-card__info">
          <h3 class="team-card__name">{{ member.name }}</h3>
          <p class="team-card__role">{{ member.role }}</p>
          <button 
            v-if="member.email" 
            @click="copyEmail(member.email)"
            class="team-card__email"
            :class="{ 'team-card__email--visible': hoveredCard === member.name }"
            :title="copiedEmail === member.email ? 'Kopiert!' : 'Klicken zum Kopieren'"
          >
            <svg v-if="copiedEmail === member.email" class="email-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <svg v-else class="email-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span class="email-text">{{ copiedEmail === member.email ? 'Kopiert!' : member.email }}</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.team__header h1 {
  margin-top: 8px;
  margin-bottom: 12px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  color: var(--color-text-muted);
}

.muted {
  color: var(--color-text-muted);
  max-width: 680px;
  line-height: 1.6;
}

.team__grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.team-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: slideInUp 0.5s ease-out backwards;
  z-index: 1;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(var(--color-accent-rgb, 77, 124, 255), 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.team-card:hover {
  transform: translateY(-4px) scale(1.05);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.team-card:hover::before {
  opacity: 1;
}

.team-card__avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-accent-soft);
  color: var(--color-accent);
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.team-card:hover .team-card__avatar {
  transform: rotate(5deg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.team-card__avatar--image {
  background: transparent;
  padding: 0;
}

.team-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.team-card:hover .team-card__avatar img {
  transform: none;
}

.team-card__info {
  flex: 1;
  min-width: 0;
}

.team-card__name {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-text);
  transition: color 0.2s ease;
}

.team-card:hover .team-card__name {
  color: var(--color-accent);
}

.team-card__role {
  margin: 4px 0 0;
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.3;
}

.team-card__email {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  font-size: 13px;
  color: var(--color-accent);
  text-decoration: none;
  opacity: 0;
  transform: translateY(-5px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 0;
  overflow: hidden;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}

.team-card__email--visible {
  opacity: 1;
  transform: translateY(0);
  max-height: 30px;
}

.team-card__email:hover {
  color: var(--color-accent-bright, #5c8aff);
}

.team-card__email:active {
  transform: scale(0.98);
}

.team-card__email:hover .email-icon {
  transform: translateX(2px);
}

.email-icon {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.email-text {
  white-space: nowrap;
  overflow: visible;
  text-overflow: clip;
}

@media (max-width: 768px) {
  .team__grid {
    grid-template-columns: 1fr;
  }
  
  .team-card__email {
    opacity: 1;
    transform: translateY(0);
    max-height: 30px;
  }
}
</style>
