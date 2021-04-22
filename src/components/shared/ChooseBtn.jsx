import React from 'react';
import styled from 'styled-components';
import {ChooseIcon} from "./svgIcons/ChooseIcon";
import {AnswerBtn} from "./AnswerBtn";

const Button = styled(AnswerBtn)`
  background-color:  #33927B;
    &:hover{
      background-color: #00635B;
    }
`


export const ChooseBtn = (props) => {
    return <Button {...props}>
        <ChooseIcon />
    </Button>
}