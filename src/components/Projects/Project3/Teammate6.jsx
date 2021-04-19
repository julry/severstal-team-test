import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate6_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("6","3")} />
}

export default Teammate6_3