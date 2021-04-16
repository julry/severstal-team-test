import React from "react";
import Intro from "../Intro";
import {getIntroScreenById} from "../../utils/getIntroScreenById";

const IntroScreen3 = () => {
    return <Intro screen={getIntroScreenById('3')} />
}

export default IntroScreen3;