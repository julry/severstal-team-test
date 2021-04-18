import styled from "styled-components";
import React from "react";

const StyledHead = styled.div`
    padding: 19px 26px;
    background-color: #FF0000;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
`

export const Header = (props) => {
    return <StyledHead>
        проект №{props.id} >>>
    </StyledHead>
}
