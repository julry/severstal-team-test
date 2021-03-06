import React from "react";
import styled from "styled-components";
import {circleProjectTop, circleTopDesktop} from "../../constants/images";

 const Img = styled.img`
    position: absolute;
    top:0;
    right:0;
    width: 65.333vw;
    max-width: 245px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media screen and (max-width: 340px){
        width: 61vw;
    }
    @media screen and (min-width: 640px){
        max-width: 235px;
    }
    
    @media screen and (min-width: 1100px){
        max-width: none;
        width: 220px;
    }
    
    
`

export  const TopImg = (props) => {
     const isDesktop = window.innerWidth >= 1000;
    return <Img {...props} src={isDesktop ? circleTopDesktop : circleProjectTop} alt={''}/>
}