import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate2_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("2","3")} />
}

export default Teammate2_3