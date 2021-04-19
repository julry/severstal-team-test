import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate1_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("1","3")} />
}

export default Teammate1_3