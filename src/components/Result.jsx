import React, {useContext} from "react";
import styled from 'styled-components';
import {Header} from "./shared/Header";
import {TopImg} from "./shared/TopImg";
import {circleResult} from "../constants/images";
import {NextButtonRed} from "./shared/NextButtonRed";
import {ProgressContext} from "../context/ProgressContext";
import {projects} from "../projects.config";
import {NextButtonInvite} from "./shared/NextButtonInvite";

const Wrapper = styled.div`
    white-space: pre-wrap;
    @media all and (min-width: 1100px){
        white-space: normal;
        
    }
`

const Title = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    margin: 2.3vh 62px 0;
    @media all and (min-width: 1100px){
        grid-row: 1/2;
        grid-column: 1/3;
        white-space: normal;
        font-size: 36px;
        margin-top: 85px;
        line-height: 22px;
    }
`

const InfoWrapper = styled.div`
    max-width: 1125px;
    @media all and (min-width: 1100px){
        white-space: normal;
        display: grid;
        grid-template-rows: 160px 56.5555vh auto;
        grid-template-columns: 465px auto;
    }
`

const ImgWrapper = styled.div`
    padding: 6.6vh 20vw 3.07vh 17vw;
    position: relative;
     @media all and (min-width: 1100px){
        padding: 0 0 0 80px;
        height: fit-content;
        grid-row: 2/3;
        grid-column: 1/2;
    }
`

const Img = styled.img`
    max-width: 100%;
`

const NextWrapper = styled.div`
    display: none;
    @media all and (min-width: 1100px){
       display: block;
       grid-column: 1/3;
    }
`

const Points = styled.p`
    font-weight: 600;
    font-size: 24px;
    position: absolute;
    line-height: 29px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    
    @media all and (min-width: 1100px){
        font-size: 36px;
        line-height: 29px;
        transform: translate(0,-90%);
    }
`

const MobileButton = styled.div`
      @media all and (min-width: 1100px){
        display: none;
    }
`

const TextWrapper = styled.div`
    padding: 0 27px;
     @media all and (min-width: 1100px){
        padding: 95px 0 0 90px;
        grid-row: 2/3;
        grid-column: 2/3;
    }
`

const Text = styled.p`
    font-size: 13px;
    line-height: 22px;
    @media all and (min-width: 1100px){
        font-size: 24px;
        line-height: 30px;
    }
`

const TitleResult = styled(Text)`
    font-weight: 600;
    @media all and (min-width: 1100px){
         margin-bottom: 35px;
    }

`

const Hr = styled.hr`
    margin-top: 19px;
    border: 2px solid;
    
`

const InviteWrapper = styled.div`
    width: fit-content !important;
`

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const InviteText = styled(Text)`
    font-size: 17px;
    margin-top: 5px;

    @media all and (min-width: 1100px){
         font-size: 23px;
    }
`

const Result = (props) => {
    const {project} = props;
    const points = 100;
    const { setNext } = useContext(ProgressContext);

    const {text, title} = points === 100 ? project.result.success : project.result.fail;
    return <Wrapper>
        <Header id={project.id} />
        <TopImg />
        <InfoWrapper>
            <Title>{"Эффективность\nСОЗДАННОЙ команды"}</Title>
            <ImgWrapper>
                <Img src={circleResult} alt={''} />
                <Points>{points}%</Points>
            </ImgWrapper>
            <TextWrapper>
                <TitleResult>
                    {title}
                </TitleResult>
                <Text>{text}</Text>
                <MobileButton>
                    <Hr/>
                    <BtnWrapper>
                        { +project.id===projects.length ? <div style={{width: 'fit-content'}}>
                                <NextButtonInvite />
                                <InviteText>в «Северсталь-инфоком»!</InviteText>
                            </div>
                            : <NextButtonRed onClick={setNext}/>}
                    </BtnWrapper>
                </MobileButton>

            </TextWrapper>
            <NextWrapper>
                <Hr/>
                <BtnWrapper>
                    { +project.id===projects.length ?<InviteWrapper>
                                <NextButtonInvite />
                                <InviteText>в «Северсталь-инфоком»!</InviteText>
                            </InviteWrapper>
                        : <NextButtonRed onClick={setNext}/>}
                </BtnWrapper>
            </NextWrapper>
        </InfoWrapper>

    </Wrapper>
}

export default Result;