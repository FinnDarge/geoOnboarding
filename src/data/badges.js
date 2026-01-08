export const badgeDefinitions = {
  'js-fundamentals': {
    id: 'js-fundamentals',
    name: 'JavaScript-Meister',
    description: 'Modul JavaScript-Grundlagen abgeschlossen',
    image: '/src/data/img/badges/javascript.png',
    moduleId: 'js-fundamentals',
    type: 'module',
    track: 'common'
  },
  'vue-basics': {
    id: 'vue-basics',
    name: 'Vue-Experte',
    description: 'Vue + Vuex Grundlagen gemeistert',
    image: '/src/data/img/badges/vue.png',
    moduleId: 'vue-basics',
    type: 'module',
    track: 'common'
  },
  'geo-basics': {
    id: 'geo-basics',
    name: 'Geo-Spezialist',
    description: 'Geo-Grundlagen abgeschlossen - Projektionen, WMS, WFS',
    image: '/src/data/img/badges/geoBasics.png',
    moduleId: 'geo-basics',
    type: 'module',
    track: 'common'
  },
  'masterportal': {
    id: 'masterportal',
    name: 'Masterportal-Experte',
    description: 'Masterportal-Übersicht abgeschlossen',
    image: '/src/data/img/badges/masterportalOverview.png',
    moduleId: 'masterportal',
    type: 'module',
    track: 'masterportal'
  },
  'testing': {
    id: 'testing',
    name: 'Testing-Guru',
    description: 'Testing mit Mocha/Chai/Sinon gemeistert',
    image: '/src/data/img/badges/testing.png',
    moduleId: 'testing',
    type: 'module',
    track: 'masterportal'
  },
  'capstone': {
    id: 'capstone',
    name: 'Abschlussprojekt-Champion',
    description: 'Abschlussprojekt abgeschlossen',
    image: '/src/data/img/badges/capstoneProject.png',
    moduleId: 'capstone',
    type: 'module',
    track: 'masterportal'
  },
  'polar-mapping': {
    id: 'polar-mapping',
    name: 'POLAR Framework Expert',
    description: 'Completed POLAR Framework Basics',
    image: '/src/data/img/badges/polarBasics.png',
    moduleId: 'polar-mapping',
    type: 'module',
    track: 'polar'
  },
  'masterportal-track': {
    id: 'masterportal-track',
    name: 'Masterportal-Meister',
    description: 'Gesamten Masterportal-Track abgeschlossen',
    image: '/src/data/img/badges/masterportalTrackCompletion.png',
    type: 'track',
    track: 'masterportal',
    requiredModules: ['js-fundamentals', 'vue-basics', 'geo-basics', 'masterportal', 'testing', 'capstone']
  },
  'polar-track': {
    id: 'polar-track',
    name: 'POLAR-Meister',
    description: 'Gesamten POLAR-Track abgeschlossen',
    image: '/src/data/img/badges/polarTrackCompletion.png',
    type: 'track',
    track: 'polar',
    requiredModules: ['js-fundamentals', 'vue-basics', 'geo-basics', 'polar-mapping']
  }
};

export const getAllBadges = () => Object.values(badgeDefinitions);

export const getModuleBadges = () => 
  Object.values(badgeDefinitions).filter(badge => badge.type === 'module');

export const getTrackBadges = () => 
  Object.values(badgeDefinitions).filter(badge => badge.type === 'track');

export const getBadgeById = (id) => badgeDefinitions[id] || null;

export const getBadgeForModule = (moduleId) => 
  Object.values(badgeDefinitions).find(badge => badge.moduleId === moduleId);
