import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate9_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("9","3")} />
}

export default Teammate9_3