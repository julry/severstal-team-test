import React, {useEffect, useState} from "react";
import {screens} from "../screens.config";
import {preloadImage} from "../utils/preloadImage";
import { ProgressProvider } from '../context/ProgressContext';
import {projects} from "../projects.config";
import {getTeammate} from "../utils/getTeammate";

export function ScreenWrapper() {
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const [screenDelta, setScreenDelta] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [finalPoints, setFinalPoints] = useState({});
    const [refused, setRefused] = useState({});

    const setPrev = () => {
        const canSet = currentScreenIndex > 0;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex - 1);
            setScreenDelta(screenDelta - 1);
        }
    };

    const setNext = () => {
        const canSet = currentScreenIndex < screens.length - 1;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex + 1);
            setScreenDelta(screenDelta === 0 ? screenDelta : screenDelta + 1);
        }
    };

    const setAnswer = (projectId, teammateId, action) => {
        let projectTeammates = answers[projectId] ? [...answers[projectId]] : [];
        let refusedTeammates = refused[projectId] ? [...refused[projectId]] : [];
        if (action==='choose'){
            refusedTeammates = refused[projectId] ? refused[projectId].filter(id=> id!==teammateId) : [];

            if (!projectTeammates.includes(teammateId)) {
                projectTeammates.push(teammateId);
            }
        } else if (action==='refuse'){
            refusedTeammates.push(teammateId);
            if (projectTeammates.includes(teammateId)) {
                projectTeammates = answers[projectId].filter(id=> id!==teammateId);
            }
        }
        setAnswers(answers=> ({...answers, [projectId]: projectTeammates}));
        setRefused(refused=> ({...refused, [projectId]: refusedTeammates}))
    };


    const countPoints = (projectId) => {
        let result = 0;
        if (answers[projectId]&&answers[projectId].length > 0) {
            const correctCount = projects
                .find(project=>project.id===projectId).team
                .filter(teammate=> teammate.isCorrect).length;
            const pointPerCorrect = Math.floor(100 / correctCount);
            answers[projectId].map(mateId=> {
                if (getTeammate(mateId, projectId).isCorrect) {
                    result += pointPerCorrect;
                }
                else {
                    result -= 10;
                }
            })
            result = result <= 0 ? 0 : result===99 ? 100 : result;
        }
        setFinalPoints(points => ({...points, [projectId]: result}));
    }

    const { component, preloadImages, ...screen } = screens[currentScreenIndex] || {};
    const Component = component || (() => null);

    useEffect(() => {
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [preloadImages]);

    const progressProviderValue = {
        screen,
        answers,
        finalPoints,
        refused,
        screenDelta,
        setAnswer,
        setNext,
        setPrev,
        countPoints,
    };


    return (
        <div>
            <ProgressProvider value={progressProviderValue}>
                <Component />
            </ProgressProvider>
        </div>
    );
}
