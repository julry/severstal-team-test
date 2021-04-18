import Result from "../../Result";
import {getProjectById} from "../../../utils/getProjectById";
import React from "react";

const Result2 = () => {
    return <Result project={getProjectById("2")} />
}

export default Result2