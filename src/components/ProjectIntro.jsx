import React, {useContext} from "react";
import styled from "styled-components";
import {NextButtonRed} from "./shared/NextButtonRed";
import {ProgressContext} from "../context/ProgressContext";
import {TopImg} from "./shared/TopImg";
import {circleProjectTop} from "../constants/images";
const ProjectWrapper = styled.div`
    
`
const Header = styled.div`
    padding: 19px 26px;
    background-color: #FF0000;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
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

const ProjectIntro = (props) => {
    const {project} = props;
    const { setNext } = useContext(ProgressContext);

    return <div>
        <Header>
            проект №{project.id} >>>
        </Header>
        <TopImg src={circleProjectTop} alt={''} />
        <TextWrapper>
            <Title>{project.title}</Title>
            {props.children}
            <Hr />
            <BtnWrapper>
                <NextButtonRed onClick={ setNext } />
            </BtnWrapper>
        </TextWrapper>
    </div>
}

export default ProjectIntro;