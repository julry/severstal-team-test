import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate8_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("8","3")} />
}

export default Teammate8_3