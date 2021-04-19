import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate6_2 = () => {
    return <TeammateScreenWrapper projectId={"2"} teammate = {getTeammate("6","2")} />
}

export default Teammate6_2