const ACCESS_TOKEN = "ACCESS_TOKEN";
const CHOOSE_PROFILE_ACCESS_TOKEN = "CHOOSE_PROFILE_ACCESS_TOKEN"

export const addAccessToken = (token) =>
 { localStorage.setItem(ACCESS_TOKEN, token);}
 export const addChooseProfileAccessToken = (token) => {
    localStorage.setItem(CHOOSE_PROFILE_ACCESS_TOKEN, token)
 }
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
