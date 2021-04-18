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
`

const Title = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    margin: 19px 27px 0;

`

const ImgWrapper = styled.div`
    padding: 54px 75px 25px 64px;
    position: relative;
`

const Img = styled.img`
    max-width: 100%;
`

const Points = styled.p`
    font-weight: 600;
    font-size: 24px;
    position: absolute;
    line-height: 29px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-53%, -70%);
    text-transform: uppercase;
`

const TextWrapper = styled.div`
    padding: 0 27px;
`

const Text = styled.p`
    font-size: 13px;
    line-height: 22px;
`

const TitleResult = styled(Text)`
    font-weight: 600;
`

const Hr = styled.hr`
    margin-top: 19px;
    border: 2px solid;
`

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Result = (props) => {
    const {project} = props;
    const points = 100;
    const { setNext } = useContext(ProgressContext);

    const {text, title} = points === 100 ? project.result.success : project.result.fail;
    return <Wrapper>
        <Header id={project.id} />
        <TopImg />
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
            <Hr/>
            <BtnWrapper>
                { +project.id===projects.length ? <NextButtonInvite />
                    : <NextButtonRed onClick={setNext}/>}
            </BtnWrapper>
        </TextWrapper>

    </Wrapper>
}

export default Result;