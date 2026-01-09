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

const meetings = [
  {
    title: 'Daily',
    icon: '💬',
    frequency: 'Täglich',
    time: '11:30 - 12:00 Uhr',
    description: 'Täglicher Austausch in unserer Gruppe per Skype, jeder berichtet woran er gerade arbeitet oder es wird Smalltalk (privat) gehalten.',
    location: 'Skype',
    color: 'blue'
  },
  {
    title: 'Extended Daily',
    icon: '📋',
    frequency: 'Wöchentlich (im Wechsel)',
    time: '10:00 - 11:00 Uhr',
    description: 'Längerer Daily per Skype bei dem die laufenden Projekte tiefergehend besprochen werden und Christian organisatorische Themen aus Führungsrunden behandelt oder wir Teamevents etc. planen. Findet im Wechsel mit dem Bi-Weekly statt.',
    location: 'Skype',
    color: 'purple'
  },
  {
    title: 'Bi-Weekly',
    icon: '🏢',
    frequency: 'Wöchentlich (im Wechsel)',
    time: '10:00 - 12:00 Uhr',
    description: 'Das gleiche wie Extended Daily aber vor Ort meist in Flintbek oder alternativ in Altenholz. Findet im Wechsel mit dem Extended Daily statt.',
    location: 'Flintbek / Altenholz',
    color: 'green'
  },
  {
    title: 'Geo JourFixe',
    icon: '🌍',
    frequency: 'Donnerstags',
    time: '10:00 - 11:00 Uhr',
    description: 'Austausch mit unseren Kollegen bei DA um über laufende oder neue Projekte zu sprechen.',
    location: 'Skype',
    color: 'orange'
  }
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

    <section class="card meetings-section">
      <div class="meetings-header">
        <p class="eyebrow">Wichtige Termine 📅</p>
        <h2>Team-Meetings & Austausch</h2>
        <p class="muted">
          Unsere regelmäßigen Meetings halten dich auf dem Laufenden und bieten Raum für Austausch und Zusammenarbeit.
        </p>
      </div>

      <div class="meetings-grid">
        <div 
          v-for="(meeting, index) in meetings" 
          :key="meeting.title"
          class="meeting-card"
          :class="`meeting-card--${meeting.color}`"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="meeting-card__header">
            <div class="meeting-card__icon">{{ meeting.icon }}</div>
            <div class="meeting-card__title-group">
              <h3 class="meeting-card__title">{{ meeting.title }}</h3>
              <span class="meeting-card__frequency">{{ meeting.frequency }}</span>
            </div>
          </div>
          <p class="meeting-card__description">{{ meeting.description }}</p>
          <div class="meeting-card__footer">
            <span v-if="meeting.time" class="meeting-card__time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {{ meeting.time }}
            </span>
            <span class="meeting-card__location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {{ meeting.location }}
            </span>
          </div>
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

/* Meetings Section */
.meetings-section {
  margin-bottom: 24px;
}

.meetings-header {
  margin-bottom: 28px;
}

.meetings-header h2 {
  margin-top: 8px;
  margin-bottom: 12px;
  font-size: 24px;
}

.meetings-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.meeting-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInUp 0.5s ease-out backwards;
  position: relative;
  overflow: hidden;
}

.meeting-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--meeting-color);
  transition: width 0.3s ease;
}

.meeting-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--meeting-color);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.meeting-card:hover::before {
  width: 100%;
  opacity: 0.1;
}

.meeting-card--blue {
  --meeting-color: #3b82f6;
}

.meeting-card--purple {
  --meeting-color: #a855f7;
}

.meeting-card--green {
  --meeting-color: var(--color-accent);
}

.meeting-card--orange {
  --meeting-color: #f59e0b;
}

.meeting-card__header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.meeting-card__icon {
  font-size: 32px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.meeting-card:hover .meeting-card__icon {
  transform: scale(1.1) rotate(-5deg);
}

.meeting-card__title-group {
  flex: 1;
}

.meeting-card__title {
  margin: 0 0 6px 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
}

.meeting-card__frequency {
  display: inline-block;
  font-size: 12px;
  color: var(--meeting-color);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.meeting-card__description {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.meeting-card__footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  flex-wrap: wrap;
}

.meeting-card__time {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-accent);
  font-weight: 600;
}

.meeting-card__time svg {
  opacity: 0.7;
}

.meeting-card__location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-text-muted);
}

.meeting-card__location svg {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .meetings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
