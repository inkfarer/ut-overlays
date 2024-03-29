const DASHBOARD_BUNDLE_NAME = 'ipl-overlay-controls';

const activeBreakScene = nodecg.Replicant('activeBreakScene', DASHBOARD_BUNDLE_NAME);
const casters = nodecg.Replicant('casters', DASHBOARD_BUNDLE_NAME);
const mainFlavorText = nodecg.Replicant('mainFlavorText', DASHBOARD_BUNDLE_NAME);
const nowPlaying = nodecg.Replicant('nowPlaying', DASHBOARD_BUNDLE_NAME);
const manualNowPlaying = nodecg.Replicant('manualNowPlaying', DASHBOARD_BUNDLE_NAME);
const nowPlayingSource = nodecg.Replicant('nowPlayingSource', DASHBOARD_BUNDLE_NAME);
const musicShown = nodecg.Replicant('musicShown', DASHBOARD_BUNDLE_NAME);
const nextRoundTime = nodecg.Replicant('nextRoundStartTime', DASHBOARD_BUNDLE_NAME);
const nextRoundStartTimeShown = nodecg.Replicant('nextRoundStartTimeShown', DASHBOARD_BUNDLE_NAME);
const rounds = nodecg.Replicant('rounds', DASHBOARD_BUNDLE_NAME);
const activeRound = nodecg.Replicant('activeRoundId', DASHBOARD_BUNDLE_NAME);
const gameWinners = nodecg.Replicant('gameWinners', DASHBOARD_BUNDLE_NAME);
const scoreboardData = nodecg.Replicant('scoreboardData', DASHBOARD_BUNDLE_NAME);
const teamScores = nodecg.Replicant('teamScores', DASHBOARD_BUNDLE_NAME);
const nextTeams = nodecg.Replicant('nextTeams', DASHBOARD_BUNDLE_NAME);
const scoreboardShown = nodecg.Replicant('scoreboardShown', DASHBOARD_BUNDLE_NAME);
