import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate7_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("7","3")} />
}

export default Teammate7_3