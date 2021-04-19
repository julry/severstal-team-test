import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate7_2 = () => {
    return <TeammateScreenWrapper teammate = {getTeammate("7","2")} isLast={true}/>
}

export default Teammate7_2