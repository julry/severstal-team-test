import Result from "../../Result";
import {getProjectById} from "../../../utils/getProjectById";
import React from "react";

const Result1 = () => {
    return <Result project={getProjectById("1")} />
}

export default Result1