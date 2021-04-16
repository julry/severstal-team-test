import {introScreens} from "../intro.config";

export const getIntroScreenById = (id) => {
    return introScreens.find(screen => screen.id === id);
};