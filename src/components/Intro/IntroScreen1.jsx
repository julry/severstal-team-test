import React from "react";
import Intro from "../Intro";
import {getIntroScreenById} from "../../utils/getIntroScreenById";

const IntroScreen1 = () => {
    return <Intro screen={getIntroScreenById('1')} />
}

export default IntroScreen1;