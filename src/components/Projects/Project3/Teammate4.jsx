import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate4_3 = () => {
    return <TeammateScreenWrapper teammate = {getTeammate("4","3")} />
}

export default Teammate4_3