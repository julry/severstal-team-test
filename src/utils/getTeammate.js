import {getProjectById} from "./getProjectById";

export const getTeammate = (teammateId, projectId) => {
    const project = getProjectById(projectId);
    return project.team.find(mate => mate.id === teammateId);
}