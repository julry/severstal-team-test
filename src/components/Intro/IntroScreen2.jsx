import React from "react";
import Intro from "../Intro";
import {getIntroScreenById} from "../../utils/getIntroScreenById";

const IntroScreen2 = () => {
    return <Intro screen={getIntroScreenById('2')} />
}

export default IntroScreen2;