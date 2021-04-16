import React, {useEffect, useState} from "react";
import {screens, ScreenType} from "../screens.config";
import {preloadImage} from "../utils/preloadImage";
import { ProgressProvider } from '../context/ProgressContext';


export function ScreenWrapper() {
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const [screenDelta, setScreenDelta] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [finalPoints, setFinalPoints] = useState({});

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

    ///ПРОДУМАТЬ КАК СЧИТАТЬ ОТВЕТЫ

    const setAnswer = (projectId, isCorrect) => {
        // const projectAnswers = [...answers[projectId], isCorrect];
        // setAnswers(answers => ({...answers, [projectId]: projectAnswers }));
    };


    const { component, preloadImages, ...screen } = screens[currentScreenIndex] || {};
    const Component = component || (() => null);

    useEffect(() => {
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [preloadImages]);

    const progressProviderValue = {
        screen,
        answers,
        screenDelta,
        setAnswer,
        setNext,
        setPrev,
    };

    return (
        <div>
            <ProgressProvider value={progressProviderValue}>
                <Component />
            </ProgressProvider>
        </div>
    );
}
