import React from "react";
import TeammateScreenWrapper from "../../TeammateScreenWrapper";
import {getTeammate} from "../../../utils/getTeammate";

const Teammate10_3 = () => {
    return <TeammateScreenWrapper projectId={"3"} teammate = {getTeammate("10","3")} isLast={true}/>
}

export default Teammate10_3