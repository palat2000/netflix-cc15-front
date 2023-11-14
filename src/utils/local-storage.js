const ACCESS_TOKEN = "ACCESS_TOKEN";
const CHOOSE_PROFILE_ACCESS_TOKEN = "CHOOSE_PROFILE_ACCESS_TOKEN"
const RECENT_WATCH_TOKEN = "RECENT_WATCH_TOKEN"

export const addAccessToken = (token) => { localStorage.setItem(ACCESS_TOKEN, token); }
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const addChooseProfileAccessToken = (token) => { localStorage.setItem(CHOOSE_PROFILE_ACCESS_TOKEN, token) }
export const getChooseProfileAccessToken = () => localStorage.getItem(CHOOSE_PROFILE_ACCESS_TOKEN);
export const removeChooseProfileAccessToken = () => localStorage.removeItem(CHOOSE_PROFILE_ACCESS_TOKEN);

export const addRecentWatchVideo = (watchVideoData) => { localStorage.setItem(RECENT_WATCH_TOKEN, watchVideoData) }
export const getRecentWatchVideo = () => localStorage.getItem(RECENT_WATCH_TOKEN);
export const removeRecentWatchVideo = () => localStorage.removeItem(RECENT_WATCH_TOKEN);


