import modulesData from './modules.json';

const tracks = modulesData.tracks || [];

const modules = tracks.flatMap((track) =>
  (track.modules || []).map((module) => ({
    ...module,
    track: module.track || track.id
  }))
);

const getModulesForTrack = (selectedTrack) =>
  modules.filter(
    (module) => module.track === 'common' || (selectedTrack ? module.track === selectedTrack : module.track === 'common')
  );

const getTrackById = (trackId) => tracks.find((track) => track.id === trackId);

const getModuleById = (moduleId) => modules.find((module) => module.id === moduleId);

export { tracks, modules, getModuleById, getModulesForTrack, getTrackById };
