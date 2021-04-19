import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate2_2 = () => {
    return <TeammateScreenWrapper teammate = {getTeammate("2","2")} />
}

export default Teammate2_2