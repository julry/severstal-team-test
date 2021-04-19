import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate5_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("5","3")} />
}

export default Teammate5_3