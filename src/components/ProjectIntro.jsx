import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {NextButtonRed} from "./shared/NextButtonRed";
import {ProgressContext} from "../context/ProgressContext";
import {TopImg} from "./shared/TopImg";
import {circleProjectBtm, circleProjectTop} from "../constants/images";
import {Header} from "./shared/Header";

const ProjectWrapper = styled.div`
     overflow: hidden;
`

const TextWrapper = styled.div`
    padding: 27px 27px 14px;
    white-space: pre-wrap;
`

const Title = styled.h2`
    margin-bottom: 13px;
    text-transform: uppercase;

`

const Hr = styled.hr`
    margin-top: 14px;
    border: 2px solid;
`

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CircleWrapper = styled.div`
    height: 300px;
    margin: 30px 0 0 -27px;
    overflow: hidden;
`

const Circle = styled.img`
    width: 220px;
    margin-top: -80px;
`

const ProjectIntro = (props) => {
    const {project, step, setStep} = props;
    const { setNext } = useContext(ProgressContext);
    const setNextStep = () => {
        if (step < project.stepCounts) setStep(step + 1);
    }

    useEffect(()=>{
        window.scroll(0, 0);
    },[]);

    return <ProjectWrapper onClick={setNextStep}>
        <Header id={project.id} />
        <TextWrapper>
            <Title>{project.title}</Title>
            {props.children}
            {step < project.stepCounts ?
                <CircleWrapper>
                    <Circle src={circleProjectBtm}  alt={''}/>
                </CircleWrapper>
                :<>
                    <Hr/>
                    <BtnWrapper>
                    <NextButtonRed onClick={setNext} />
                    </BtnWrapper>
                </>}
        </TextWrapper>
    </ProjectWrapper>
}

export default ProjectIntro;