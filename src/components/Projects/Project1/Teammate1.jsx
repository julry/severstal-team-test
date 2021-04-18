import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate1_1 = () => {
    return <TeammateScreenWrapper teammate = {getTeammate("1","1")} />
}

export default Teammate1_1