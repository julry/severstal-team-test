import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate4_1 = () => {
    return <TeammateScreenWrapper projectId={"1"} teammate = {getTeammate("4","1")} />
}

export default Teammate4_1