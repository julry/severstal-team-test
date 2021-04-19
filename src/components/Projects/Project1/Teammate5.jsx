import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate5_1 = () => {
    return <TeammateScreenWrapper projectId={"1"} teammate = {getTeammate("5","1")} />
}

export default Teammate5_1