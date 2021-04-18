import IntroScreen1 from "./components/Intro/IntroScreen1";
import IntroScreen2 from "./components/Intro/IntroScreen2";
import IntroScreen3 from "./components/Intro/IntroScreen3";
import {
    alexEinstein,
    circleProjectTop,
    grishaPotter,
    ivanNedobriy,
    jamesGoslingov,
    steveWorks,
    vinBenzin
} from "./constants/images";
import ProjectIntro1 from "./components/Projects/Project1/ProjectIntro1";
import ProjectIntro2 from "./components/Projects/Project2/ProjectInro2";
import ProjectIntro3 from "./components/Projects/Project3/ProjectIntro3";
import Result1 from "./components/Projects/Project1/Result1";
import Result2 from "./components/Projects/Project2/Result2";
import Result3 from "./components/Projects/Project3/Result3";
import Teammate1_1 from "./components/Projects/Project1/Teammate1";


export const ScreenType = {
    Intro: 'intro',
    Project: 'question',
    Teammate: 'teammate',
    ProjectFinal: 'final',
};

export const screens = [
    {
        name: 'intro-1',
        component: IntroScreen1,
        type: ScreenType.Intro,
        preloadImages: [],
    },
    {
        name: 'intro-2',
        component: IntroScreen2,
        type: ScreenType.Intro,
        preloadImages: [],
    },
    {
        name: 'intro-3',
        component: IntroScreen3,
        type: ScreenType.Intro,
        preloadImages: [circleProjectTop],
    },
    {
        name: 'project-1',
        component: ProjectIntro1,
        type: ScreenType.Project,
        preloadImages: [steveWorks],
        image: [circleProjectTop]
    },
    {
        name: 'teammate-1-1',
        component: Teammate1_1,
        type: ScreenType.Teammate,
        preloadImages: [steveWorks],
        image: [circleProjectTop]
    },
    {
        name: 'teammate-1-2',
        component: ProjectIntro1,
        type: ScreenType.Project,
        preloadImages: [steveWorks],
        image: [circleProjectTop]
    },
    {
        name: 'teammate-1-3',
        component: ProjectIntro1,
        type: ScreenType.Project,
        preloadImages: [steveWorks],
        image: [circleProjectTop]
    },
    {
        name: 'teammate-1-4',
        component: ProjectIntro2,
        type: ScreenType.Project,
        preloadImages: [steveWorks],
        image: [circleProjectTop]
    },
    {
        name: 'project-3',
        component: ProjectIntro3,
        type: ScreenType.Project,
        preloadImages: [steveWorks],
        image: [circleProjectTop]
    },
    {
        name: 'result-1',
        component: Result1,
        type: ScreenType.ProjectFinal,
        preloadImages: [],
        image: []
    },
    {
        name: 'result-2',
        component: Result2,
        type: ScreenType.ProjectFinal,
        preloadImages: [],
        image: []
    },
    {
        name: 'result-3',
        component: Result3,
        type: ScreenType.ProjectFinal,
        preloadImages: [],
        image: []
    },

    // {
    //     name: 'question-3',
    //     component: Question3,
    //     type: ScreenType.Question,
    //     preloadImages: [question4Image1,question4Image2],
    //     image: [question3Image1,question3Image2,question3gif]
    // },
    // {
    //     name: 'question-4',
    //     component: Question4,
    //     type: ScreenType.Question,
    //     preloadImages: [question5Image1,question5Image2,question5gif],
    //     image: [question4Image1,question4Image2],
    // },
    // {
    //     name: 'question-5',
    //     component: Question5,
    //     type: ScreenType.Question,
    //     preloadImages: [question6Image1,question6Image2, question6gif],
    //     image: [question5Image1,question5Image2,question5gif],
    // },
    // {
    //     name: 'question-6',
    //     component: Question6,
    //     type: ScreenType.Question,
    //     preloadImages: [question7Image1,question7Image2],
    //     image: [question6Image1,question6Image2,question6gif],
    // },
    // {
    //     name: 'question-7',
    //     component: Question7,
    //     type: ScreenType.Question,
    //     preloadImages: [question8Image1,question8Image2],
    //     image: [question7Image1,question7Image2],
    // },
    // {
    //     name: 'question-8',
    //     component: Question8,
    //     type: ScreenType.Question,
    //     preloadImages: [question9Image1,question9Image2, question9gif],
    //     image: [question8Image1,question8Image2],
    // },
    // {
    //     name: 'question-9',
    //     component: Question9,
    //     type: ScreenType.Question,
    //     preloadImages: [question10Image1,question10Image2,question10gif],
    //     image: [question9Image1,question9Image2, question9gif],
    // },
    // {
    //     name: 'question-10',
    //     component: Question10,
    //     type: ScreenType.Question,
    //     preloadImages: [elonMuskImage, peterDruckerImage, warrenBuffettImage, tonyRobbinsImage, jackMaImage],
    //     image: [question10Image1,question10Image2, question10gif],
    // },
    // {
    //     name: 'loading',
    //     component: Loading,
    //     type: ScreenType.Loading,
    // },
    // {
    //     name: 'final',
    //     component: Final,
    //     type: ScreenType.Final,
    // },
];