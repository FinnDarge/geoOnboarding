import modules from './modules.json';

export const trackOptions = [
  {
    id: 'masterportal',
    name: 'Masterportal track',
    summary: 'Focus on configuring and extending Masterportal for municipal deployments.',
    expectations:
      'Testing: prove you can mock OpenLayers interactions and protect layer configs. Capstone: ship a Masterportal demo with multiple layers and a small test harness.'
  },
  {
    id: 'polar',
    name: 'Polar track',
    summary: 'Dive into the Polar map client, connecting vector/tile sources with lightweight UI controls.',
    expectations:
      'Testing: validate data pipelines and map state changes with stubs. Capstone: configure Polar sources and interactions that showcase real-world usage.'
  }
];

export const modulesForTrack = (trackId) =>
  modules.filter((module) => !module.tracks || module.tracks.includes(trackId || trackOptions[0].id));
