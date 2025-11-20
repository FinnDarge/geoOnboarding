<script setup>
const teamMembers = [
  { name: 'Dr. Christian Zirkelbach', role: 'Gruppenleiter', initials: 'CZ', image: '/src/data/img/zirkelbach.png' },
  { name: 'Carina Brühl', role: 'Entwicklerin', initials: 'CB' },
  { name: 'Finn-Rasmus Darge', role: 'Entwickler', initials: 'FD', image: '/src/data/img/darge.png' },
  { name: 'Leonard Dietrich', role: 'Softwaretester', initials: 'LD' },
  { name: 'Konstantin Holm', role: 'Entwickler', initials: 'KH' },
  { name: 'Melanie Michaela Klamp', role: 'Entwicklerin', initials: 'MK' },
  { name: 'Martina Niese', role: 'Entwicklerin', initials: 'MN' },
  { name: 'Hendrik Oenings', role: 'Entwickler', initials: 'HO' },
  { name: 'Michel René Ptak', role: 'Entwickler', initials: 'MP' },
  { name: 'Judith Rasch', role: 'Entwicklerin (Vertretung von Christian)', initials: 'JR' },
  { name: 'Markus Rullkötter', role: 'Entwickler', initials: 'MR' },
  { name: 'Pascal Röhling', role: 'Entwickler', initials: 'PR', image: '/src/data/img/röhling.png' },
  { name: 'Dennis Sen', role: 'Entwickler', initials: 'DS', image: '/src/data/img/sen.png' }
];
</script>

<template>
  <div class="team">
    <section class="card team__header">
      <div>
        <p class="eyebrow">Meet the team 👥</p>
        <h1>Your Colleagues</h1>
        <p class="muted">
          Get to know the people you'll be working with. Our team brings together developers, testers, and leadership
          to build innovative geo applications. Don't hesitate to reach out — everyone is here to help you succeed.
        </p>
      </div>
    </section>

    <section class="team__grid">
      <div v-for="member in teamMembers" :key="member.name" class="team-card card">
        <div class="team-card__avatar" :class="{ 'team-card__avatar--image': member.image }">
          <img v-if="member.image" :src="member.image" :alt="member.name" />
          <span v-else>{{ member.initials }}</span>
        </div>
        <div class="team-card__info">
          <h3 class="team-card__name">{{ member.name }}</h3>
          <p class="team-card__role">{{ member.role }}</p>
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
  transition: transform 0.2s ease, background 0.2s ease;
}

.team-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.06);
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
}

.team-card__role {
  margin: 4px 0 0;
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.3;
}

@media (max-width: 768px) {
  .team__grid {
    grid-template-columns: 1fr;
  }
}
</style>
