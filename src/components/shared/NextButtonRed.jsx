import React from "react";
import styled from 'styled-components';
import {ArrowRight} from "./svgIcons/ArrowRight";
import {Button} from "./Button";

const Arrow = styled(ArrowRight)`
    width: 30px;
    height: 26px;
`
export const NextButtonRed = (props) => {
    return <Button {...props}>
        <Arrow />
    </Button>
}