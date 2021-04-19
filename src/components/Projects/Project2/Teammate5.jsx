import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate5_2 = () => {
    return <TeammateScreenWrapper teammate = {getTeammate("5","2")} />
}

export default Teammate5_2