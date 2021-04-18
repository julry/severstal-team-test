import React from "react";
import Result from "../../Result";
import {getProjectById} from "../../../utils/getProjectById";

const Result3 = () => {
    return <Result project={getProjectById("3")} />
}

export default Result3