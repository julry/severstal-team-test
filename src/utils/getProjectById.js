import {projects} from "../projects.config";

export const getProjectById = (id) => {
    return projects.find(project => project.id === id);
};