import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";
import React from "react";

const Teammate2_1 = () => {
    return <TeammateScreenWrapper projectId={"1"} teammate = {getTeammate("2","1")} />
}

export default Teammate2_1