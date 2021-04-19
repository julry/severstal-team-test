import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate3_1 = () => {
    return <TeammateScreenWrapper teammate = {getTeammate("3","1")} />
}

export default Teammate3_1