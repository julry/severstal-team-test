import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate6_1 = () => {
    return <TeammateScreenWrapper teammate = {getTeammate("6","1")} isLast={true}/>
}

export default Teammate6_1