import React from 'react';
import styled from 'styled-components';
import {LiMarker} from "./svgIcons/LiMarker";
import {Text} from "./Text";

const StyledUl = styled.div`
    margin: 16px 0;
    
`

const StyledLi = styled.div `
    display: flex;
    font-size: 13px;
    margin-bottom: 9px;
    @media screen and (min-width: 1100px){
       margin: 25px 0;
    }
`

const Marker = styled.div`
    margin-left: -10px;
    margin-right: 14px;
    width: 25px !important;
    height: 25px;
    @media screen and (min-width: 1100px){
       width: 44px !important;
       height: 50px;
    }
`

const Icon = styled(LiMarker)`
    width: 25px;
   @media screen and (min-width: 1100px){
       width: 44px;
    }
`

export const StyledList = (props) => {
    const {list} = props;
    return <StyledUl {...props}>
        {list.map(item=> (<StyledLi key={item}>
            <Marker>
                <Icon/>
            </Marker>
            <Text> {item} </Text>
        </StyledLi>))}
    </StyledUl>
}
