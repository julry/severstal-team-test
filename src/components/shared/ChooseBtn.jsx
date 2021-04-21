import React from 'react';
import styled from 'styled-components';
import {ChooseIcon} from "./svgIcons/ChooseIcon";
import {AnswerBtn} from "./AnswerBtn";

const Button = styled(AnswerBtn)`
  background-color: #00b674;
    &:hover{
      background-color: #019a62;
    }
`


export const ChooseBtn = (props) => {
    return <Button {...props}>
        <ChooseIcon />
    </Button>
}