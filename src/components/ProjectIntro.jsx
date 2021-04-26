import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {NextButtonRed} from "./shared/NextButtonRed";
import {ProgressContext} from "../context/ProgressContext";
import {circleProjectBtm} from "../constants/images";
import {Header} from "./shared/Header";
import {reachMetrikaGoal} from "../utils/reachMetrikaGoal";

const ProjectWrapper = styled.div`
     overflow: hidden;
`

const TextWrapper = styled.div`
    padding: 3.3251vh 27px 1.7241vh;
    white-space: pre-wrap;
    @media screen and (min-width: 640px){
        white-space: normal;
        max-width: 78.125vw;
    }
`

const Title = styled.h2`
    margin-bottom: 13px;
    text-transform: uppercase;
    @media screen and (min-width: 1100px){
        margin-bottom: 30px;
    }
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
    height: 80vw;
    max-height: 300px;
    margin: 3.6945vh 0 0 -3.3325vh;
    overflow: hidden;
`

const Circle = styled.img`
    width: 27.0935vh;
    max-width: 220px;
    margin-top: -9.8522vh;
    @media screen and (min-width: 640px){
       position: fixed;
       max-width: none;
       left: 0;
       bottom: 0;
       width: 270px;
       margin-bottom: -95px;
    }
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

    const onProjectStart = () => {
        if (project.id==='1') reachMetrikaGoal('p1start');
        setNext();
    }

    return <ProjectWrapper>
        <Header id={project.id} />
        <TextWrapper>
            <Title>{project.title}</Title>
            {props.children}
            {step < project.stepCounts ?
                <>
                <Hr/>
                <BtnWrapper>
                    <NextButtonRed onClick={setNextStep} />
                </BtnWrapper>
                    <CircleWrapper>
                        <Circle src={circleProjectBtm}  alt={''}/>
                    </CircleWrapper>

                </>
                :<>
                    <Hr/>
                    <BtnWrapper>
                    <NextButtonRed onClick={onProjectStart} />
                    </BtnWrapper>
                </>}
        </TextWrapper>
    </ProjectWrapper>
}

export default ProjectIntro;