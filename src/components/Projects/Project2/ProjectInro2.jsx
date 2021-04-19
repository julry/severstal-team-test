import React, {useState} from "react";
import styled from 'styled-components';
import {getProjectById} from "../../../utils/getProjectById";
import ProjectIntro from "../../ProjectIntro";
import {Text} from "../../shared/Text";
import {StyledList} from "../../shared/StyledList";
import {TopImg} from "../../shared/TopImg";
import {circleProjectTop} from "../../../constants/images";

const Img = styled(TopImg)`
  @media screen and (max-width: 640px){
       display: none;
    }
`

const List = styled(StyledList)`
    margin: 40px 0;
`

const ProjectIntro2 = () => {
    const [step, setStep] = useState(1);
    const project = getProjectById("2");
    const getContent = () => {
        switch (step) {
            case 1:
                return <Text>
                    {"Они хотят вытащить все процессы вроде оформления справок, отпусков и больничных в отдельное мобильное приложение «Личный кабинет», чтобы любой подобный вопрос решался парой кликов на телефоне. \n" +
                    "\n" +
                    "Идея, признаемся, не нова. Похожее приложение уже давно доступно сотрудникам «Северстали», а ты сам  участвовал ранее в его разработке. "}
                </Text>
            case 2:
                return <>
                    <Text>
                        Но нет предела совершенству! В программу регулярно вносятся доработки,
                        поэтому вторая твоя задача – апгрейднуть приложение и добавить туда
                        пару новых функций:
                    </Text>
                    <List list={project.list}/>
                    <Text>
                        Итак, попытка #2. Тебе нужно собрать команду разработчиков мобильных приложений.
                        Без кого не обойтись на этот раз?
                    </Text>
                </>
            default:
                break;
        }
    }
    return <ProjectIntro project={project} step={step} setStep={setStep}>
        <Img src={circleProjectTop} alt={''} />
        {getContent()}
    </ProjectIntro>
}
export default ProjectIntro2