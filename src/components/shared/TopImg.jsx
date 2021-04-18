import React from "react";
import styled from "styled-components";
import {circleProjectTop} from "../../constants/images";

 const Img = styled.img`
    position: absolute;
    top:0;
    right:0;
    width: 245px;
    @media screen and (max-width: 340px){
        width: 210px
    }
`

export  const TopImg = (props) => {
    return <Img {...props} src={circleProjectTop} alt={''}/>
}