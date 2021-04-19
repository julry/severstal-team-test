import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate1_2 = () => {
    return <TeammateScreenWrapper projectId={"2"} teammate = {getTeammate("1","2")} />
}

export default Teammate1_2