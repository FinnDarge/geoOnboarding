import modulesData from './modules.json';

const tracks = modulesData.tracks || [];

const modules = tracks.flatMap((track) =>
  (track.modules || []).map((module) => ({
    ...module,
    track: module.track || track.id
  }))
);

const getModulesForTrack = (enabledTracks) => {
  const tracksArray = Array.isArray(enabledTracks) ? enabledTracks : (enabledTracks ? [enabledTracks] : []);
  return modules.filter(
    (module) => module.track === 'common' || tracksArray.includes(module.track)
  );
};

const getTrackById = (trackId) => tracks.find((track) => track.id === trackId);

const getModuleById = (moduleId) => modules.find((module) => module.id === moduleId);

const getAllModules = () => modules;

export { tracks, modules, getModuleById, getModulesForTrack, getTrackById, getAllModules };
