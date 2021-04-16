import React from "react";
import styled from 'styled-components';
import {ArrowRight} from "../svgIcons/ArrowRight";

const Button = styled.button`
    background-color: #FF0000;
    padding: 12px 24px;
    border: none;
    outline: none;
    z-index: 10;
`

const Arrow = styled(ArrowRight)`
    width: 30px;
    height: 26px;
`
export const NextButtonRed = (props) => {
    return <Button {...props}>
        <Arrow />
    </Button>
}