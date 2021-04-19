import React from "react";
import styled from 'styled-components';
import {Button} from "./Button";


const Invite = styled(Button)`
    @media all and (min-width: 1100px){
      padding: 20px 35px;
      font-size: 24px;
      line-height: 20px;
    }
`


export const NextButtonInvite = (props) => {
    return <Invite {...props}> Хочу на стажировку </Invite>
}