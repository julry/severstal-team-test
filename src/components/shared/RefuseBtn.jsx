import React from "react";
import styled from "styled-components";
import {AnswerBtn} from "./AnswerBtn";
import {RefuseIcon} from "./svgIcons/RefuseIcon";

const Button = styled(AnswerBtn)`
  background-color: #FF0000;
   &:hover{
      background-color: #db0000;
    }
`


export const RefuseBtn = (props) => {
    return <Button {...props}>
        <RefuseIcon />
    </Button>
}