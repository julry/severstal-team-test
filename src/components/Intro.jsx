import React, {useContext, useEffect, useRef, useState} from 'react';
import {Logo} from "./shared/svgIcons/Logo";
import styled from 'styled-components';
import {circleBgBtm, circleBgTop} from "../constants/images";
import {NextButtonRed} from "./shared/NextButtonRed";
import {ProgressContext} from '../context/ProgressContext';
import {TopImg} from "./shared/TopImg";

const IntroWrapperStyled = styled.div`
    padding: 25px 25px 0;
    white-space: pre-wrap;
    overflow: hidden;
`

const LogoSeverstal = styled(Logo)`
    width: 165px;
    height: 55px;
    margin-bottom: 15px;
    font-weight: 600;
    @media screen and (max-width: 340px){
        width: 150px;
        height: 50px;
    }
`

const Title = styled.p`
     text-transform: uppercase;
     font-size: 30px;
     line-height: 36px;
     font-weight: 600;
     margin-bottom: 15px;
     @media screen and (max-width: 340px){
        font-size: 24px;
    }
`
const Subtitle = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 28px;
`

const BtmImg = styled.img`
    width: 330px;
`

const TextTitle = styled.p`
    width: 100%;
    background-color: #FF0000;
    text-transform: uppercase;
    padding: 13px 20px;
    font-size: 18px;
`

const TextWrapper = styled.div`
    padding: 17px 20px 23px;
    background-color: #fff;
    color: #000;
    font-size: 13px;
    line-height: 22px;
`
const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    z-index: 3;
`
const BtnImgWrapper = styled.div`
  margin-left: -25px;
`

const IntroWrapper = (props) => {
    const { screen } = props;
    const { setNext } = useContext(ProgressContext);
    const buttonRef = useRef(null);
    const [height, setHeight] = useState(110);
    const [marginTop, setMarginTop] = useState(-248);

    useEffect(()=>{
        window.scroll(0, 0);
        let height = window.innerHeight - buttonRef.current.getBoundingClientRect().top - 53;
        height = height > 110 ? height : 110;
        setHeight(height);
        setMarginTop(height - 358);
    }, [])


    return <IntroWrapperStyled>
        <LogoSeverstal />
        <TopImg src={circleBgTop} alt={''} />
        <Title>{"Собери свою\nit-команду"}</Title>
        <Subtitle>
            {"Давай проверим,\nкакой ты тимлид"}
        </Subtitle>
        {screen.title&&<TextTitle>{screen.title}</TextTitle>}
        <TextWrapper>
            {screen.text}
        </TextWrapper>

        <BtnWrapper ref={buttonRef}>
            <NextButtonRed onClick={setNext} />
        </BtnWrapper>
        <BtnImgWrapper style={{height:height + 'px' }}>
            <BtmImg src={circleBgBtm} alt={''} style={{marginTop: marginTop}}/>
        </BtnImgWrapper>
    </IntroWrapperStyled>
}

export default IntroWrapper