import React, {useContext} from "react";
import styled from 'styled-components';
import {jackyChanov} from "../constants/images";
import {Text} from "./shared/Text";
import {ArrowLeft} from "./shared/svgIcons/ArrowLeft";
import {RefuseBtn} from "./shared/RefuseBtn";
import {ChooseBtn} from "./shared/ChooseBtn";
import {ArrowRight} from "./shared/svgIcons/ArrowRight";
import {ProgressContext} from "../context/ProgressContext";
import {TopImg} from "./shared/TopImg";

const Wrapper = styled.div`
    padding: 3.3vh 27px 0;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 9vh 26vh 290px auto;
    white-space: pre-wrap;
    overflow: hidden;
    
    @media all and (max-height: 750px){
       grid-template-rows: 9vh 24.5vh 15.5em auto;
    }
    @media all and (max-height: 570px){
       grid-template-rows: 9vh 21.5vh 14em auto;
    }
    
    @media screen and (min-width: 1100px){
       padding: 85px 61px 0;
       white-space: normal;
       grid-template-rows: 140px 400px auto;
       grid-template-columns: 555px 500px auto;
    }
`

const Title = styled.h3`
    grid-row: 1 / 2;
    grid-column: 1/3;

    font-size: 20px;
    line-height: 29px;
    text-transform: uppercase;
    @media all and (max-height: 750px){
       font-size: 18px;
    }
    @media screen and (min-width: 1100px){
       font-size: 36px;
        line-height: 29px;
    }
`

const TextWrapper = styled.div`
    grid-row: 3 / 4;
    @media screen and (min-width: 1100px){
        grid-column: 1/2;
        grid-row: 2 / 3;
    }
`

const ImgWrapper = styled.div`
    grid-row: 2 / 3;
    margin-bottom: 10px;
    & img {
      max-height: 100%;
      max-width: 100%;
    }
    
    @media all and (min-width: 1100px){
        max-width: 404px;
        height: 396px;
        grid-column: 2/3;

        margin-left: 60px;
        margin-top: -55px;
    }
   
`
const Position = styled.p`
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 7px;
    @media all and (max-height: 750px){
       font-size: 15px;
    }
     @media all and (min-width: 1100px){
        font-size: 36px;
        line-height: 45px;
        margin-bottom: 30px;
    }
`

const Name = styled(Position)`
    margin-bottom: 0;
    font-weight: 600;
`

const Img = styled(TopImg)`
    width: 310px;
    @media all and (max-width: 1099px){
        display: none;
    }
`

const BtnWrapper = styled.div`
    display: flex;
    grid-row: 4/5;
    justify-content: center;
    @media all and (min-width: 1100px){
        grid-row: 3/4;
        grid-column: 2/3;
    }
`

const Refuse = styled(RefuseBtn)`
    margin-right: 12px;
`
const Button = styled.button`
    background: transparent;
    outline: none;
    border: none;
    margin: 0 23px;
    & svg{
      width: 46px;
      @media all and (max-width: 300px){
          width: 35px;
      }
    }
    
    @media all and (max-width: 330px){
        margin: 0 15px;
    }
`

const FinishBtn = styled.button`
    padding: 15px 26px;
    color: #000;
    outline: none;
    border: none;
    background: #fff;
    margin-top: 10px;
    grid-row: 5/6;

    
    @media all and (min-width: 1100px){
        max-width: 350px;
        grid-column: 1/2;
        padding: 23px 18px;
        grid-row: 3/4;
        font-size: 24px;
        line-height: 20px;
        max-height: 71px;
    }
`

const TeammateScreenWrapper = (props) => {
    const { teammate, isLast } = props;

    const { setNext } = useContext(ProgressContext);

    return <Wrapper>
        <Img/>
        <Title>
            {"кого необходимо\nвзять в команду?"}
        </Title>
        <ImgWrapper>
            <img src={teammate.image} alt={''} />
        </ImgWrapper>
        <TextWrapper>
            <Name>{teammate.name}</Name>
            <Position>{teammate.position}</Position>
            <Text>
                {teammate.description}
            </Text>
        </TextWrapper>
        <BtnWrapper>
            <Button>
                <ArrowLeft />
            </Button>
            <Refuse />
            <ChooseBtn />
            <Button onClick={setNext}>
                <ArrowRight />
            </Button>
        </BtnWrapper>
        {isLast&&<FinishBtn>Сформировать команду</FinishBtn>}

    </Wrapper>
}

export default TeammateScreenWrapper;