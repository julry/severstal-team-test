import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate4_2 = () => {
    return <TeammateScreenWrapper  projectId={"2"} teammate = {getTeammate("4","2")} />
}

export default Teammate4_2