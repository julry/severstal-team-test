import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate3_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("3","3")} />
}

export default Teammate3_3