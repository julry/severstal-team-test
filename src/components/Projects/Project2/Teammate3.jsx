import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate3_2 = () => {
    return <TeammateScreenWrapper  projectId={"2"} teammate = {getTeammate("3","2")} />
}

export default Teammate3_2