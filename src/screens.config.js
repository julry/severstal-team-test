import IntroScreen1 from "./components/Intro/IntroScreen1";
import IntroScreen2 from "./components/Intro/IntroScreen2";
import IntroScreen3 from "./components/Intro/IntroScreen3";
import {
    alexEinstein, circleProjectBtm,
    circleProjectTop, circleResult, dmitriiFilin, eva,
    grishaPotter, illyaVoroshenec,
    ivanNedobriy, jackyChanov,
    jamesGoslingov, leonardoDaVinchin, michaelLomouhov, nicolaiTesla, ninjaTurtles, pavelUmnov, rajaBharatiya, steelMan,
    steveWorks, superWoman,
    vinBenzin
} from "./constants/images";
import ProjectIntro1 from "./components/Projects/Project1/ProjectIntro1";
import ProjectIntro2 from "./components/Projects/Project2/ProjectInro2";
import ProjectIntro3 from "./components/Projects/Project3/ProjectIntro3";
import Result1 from "./components/Projects/Project1/Result1";
import Result2 from "./components/Projects/Project2/Result2";
import Result3 from "./components/Projects/Project3/Result3";
import Teammate1_1 from "./components/Projects/Project1/Teammate1";
import Teammate1_2 from "./components/Projects/Project2/Teammate1";
import Teammate1_3 from "./components/Projects/Project3/Teammate1";
import Teammate4_1 from "./components/Projects/Project1/Teammate4";
import Teammate3_1 from "./components/Projects/Project1/Teammate3";
import Teammate2_2 from "./components/Projects/Project2/Teammate2";
import Teammate2_1 from "./components/Projects/Project1/Teammate2";
import Teammate5_1 from "./components/Projects/Project1/Teammate5";
import Teammate6_1 from "./components/Projects/Project1/Teammate6";
import Teammate3_2 from "./components/Projects/Project2/Teammate3";
import Teammate4_2 from "./components/Projects/Project2/Teammate4";
import Teammate5_2 from "./components/Projects/Project2/Teammate5";
import Teammate6_2 from "./components/Projects/Project2/Teammate6";
import Teammate7_2 from "./components/Projects/Project2/Teammate7";
import Teammate2_3 from "./components/Projects/Project3/Teammate2";
import Teammate3_3 from "./components/Projects/Project3/Teammate3";
import Teammate4_3 from "./components/Projects/Project3/Teammate4";
import Teammate5_3 from "./components/Projects/Project3/Teammate5";
import Teammate6_3 from "./components/Projects/Project3/Teammate6";
import Teammate7_3 from "./components/Projects/Project3/Teammate7";
import Teammate8_3 from "./components/Projects/Project3/Teammate8";
import Teammate9_3 from "./components/Projects/Project3/Teammate9";
import Teammate10_3 from "./components/Projects/Project3/Teammate10";


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
        preloadImages: [vinBenzin],
        image: [steveWorks]
    },
    {
        name: 'teammate-2-1',
        component: Teammate2_1,
        type: ScreenType.Project,
        preloadImages: [alexEinstein],
        image: [vinBenzin]
    },
    {
        name: 'teammate-3-1',
        component: Teammate3_1,
        type: ScreenType.Project,
        preloadImages: [ivanNedobriy],
        image: [alexEinstein]
    },
    {
        name: 'teammate-4-1',
        component: Teammate4_1,
        type: ScreenType.Project,
        preloadImages: [grishaPotter],
        image: [ivanNedobriy]
    },
    {
        name: 'teammate-5-1',
        component: Teammate5_1,
        type: ScreenType.Project,
        preloadImages: [jamesGoslingov],
        image: [grishaPotter]
    },
    {
        name: 'teammate-6-1',
        component: Teammate6_1,
        type: ScreenType.Project,
        preloadImages: [circleResult],
        image: [jamesGoslingov]
    },
    {
        name: 'result-1',
        component: Result1,
        type: ScreenType.ProjectFinal,
        preloadImages: [circleProjectBtm],
        image: [circleResult]
    },
    {
        name: 'project-2',
        component: ProjectIntro2,
        type: ScreenType.Project,
        preloadImages: [jackyChanov],
        image: [circleProjectBtm]
    },
    {
        name: 'teammate-1-2',
        component: Teammate1_2,
        type: ScreenType.Teammate,
        preloadImages: [rajaBharatiya],
        image: [jackyChanov]
    },
    {
        name: 'teammate-2-2',
        component: Teammate2_2,
        type: ScreenType.Project,
        preloadImages: [illyaVoroshenec],
        image: [rajaBharatiya]
    },
    {
        name: 'teammate-3-2',
        component: Teammate3_2,
        type: ScreenType.Project,
        preloadImages: [dmitriiFilin],
        image: [illyaVoroshenec]
    },
    {
        name: 'teammate-4-2',
        component: Teammate4_2,
        type: ScreenType.Project,
        preloadImages: [leonardoDaVinchin],
        image: [dmitriiFilin]
    },
    {
        name: 'teammate-5-2',
        component: Teammate5_2,
        type: ScreenType.Project,
        preloadImages: [steelMan],
        image: [leonardoDaVinchin]
    },
    {
        name: 'teammate-6-2',
        component: Teammate6_2,
        type: ScreenType.Project,
        preloadImages: [eva],
        image: [steelMan]
    },
    {
        name: 'teammate-7-2',
        component: Teammate7_2,
        type: ScreenType.Project,
        preloadImages: [circleResult],
        image: [eva]
    },
    {
        name: 'result-2',
        component: Result2,
        type: ScreenType.ProjectFinal,
        preloadImages: [circleProjectBtm, circleProjectTop],
        image: [circleResult]
    },
    {
        name: 'project-3',
        component: ProjectIntro3,
        type: ScreenType.Project,
        preloadImages: [ninjaTurtles],
        image: [circleProjectBtm, circleProjectTop]
    },
    {
        name: 'teammate-1-3',
        component: Teammate1_3,
        type: ScreenType.Teammate,
        preloadImages: [rajaBharatiya],
        image: [ninjaTurtles]
    },
    {
        name: 'teammate-2-3',
        component: Teammate2_3,
        type: ScreenType.Project,
        preloadImages: [dmitriiFilin],
        image: [rajaBharatiya]
    },
    {
        name: 'teammate-3-3',
        component: Teammate3_3,
        type: ScreenType.Project,
        preloadImages: [superWoman],
        image: [dmitriiFilin]
    },
    {
        name: 'teammate-4-3',
        component: Teammate4_3,
        type: ScreenType.Project,
        preloadImages: [michaelLomouhov],
        image: [superWoman]
    },
    {
        name: 'teammate-5-3',
        component: Teammate5_3,
        type: ScreenType.Project,
        preloadImages: [illyaVoroshenec],
        image: [michaelLomouhov]
    },
    {
        name: 'teammate-6-3',
        component: Teammate6_3,
        type: ScreenType.Project,
        preloadImages: [nicolaiTesla],
        image: [illyaVoroshenec]
    },
    {
        name: 'teammate-7-3',
        component: Teammate7_3,
        type: ScreenType.Project,
        preloadImages: [ivanNedobriy],
        image: [nicolaiTesla]
    },
    {
        name: 'teammate-8-3',
        component: Teammate8_3,
        type: ScreenType.Project,
        preloadImages: [grishaPotter],
        image: [ivanNedobriy]
    },
    {
        name: 'teammate-9-3',
        component: Teammate9_3,
        type: ScreenType.Project,
        preloadImages: [pavelUmnov],
        image: [grishaPotter]
    },
    {
        name: 'teammate-10-3',
        component: Teammate10_3,
        type: ScreenType.Project,
        preloadImages: [circleResult],
        image: [pavelUmnov]
    },
    {
        name: 'result-3',
        component: Result3,
        type: ScreenType.ProjectFinal,
        preloadImages: [],
        image: [circleResult]
    },
    // {
    //     name: 'final',
    //     component: Final,
    //     type: ScreenType.Final,
    // },
];