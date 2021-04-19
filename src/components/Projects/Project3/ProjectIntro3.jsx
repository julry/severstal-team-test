import React, {useState} from "react";
import styled from 'styled-components';
import {getProjectById} from "../../../utils/getProjectById";
import {Text} from "../../shared/Text";
import ProjectIntro from "../../ProjectIntro";
import {TopImg} from "../../shared/TopImg";
import {circleProjectTop} from "../../../constants/images";

const CircleWrapper = styled.div`
    overflow: hidden;
    height: 200px;
    position: absolute;
    top: 0;
    right: 0;
    @media screen and (min-width: 640px){
      display: none;
    }
`
const Img = styled(TopImg)`
  @media screen and (max-width: 640px){
       display: none;
    }
`

const StyledCircle = styled(TopImg)`
    margin-top: -25px;
    margin-right: -15px;
`

const ProjectIntro3 = () => {
    const [step, setStep] = useState(1);
    const project = getProjectById("3");
    const getContent = () => {
        switch (step) {
            case 1:
                return <>
                    <Text>
                    {"... все время придумывают крутые штуки и решения, чтобы упростить жизнь себе и другим. Иногда масштабы этих идей просто поражают воображение! Представь, если бы несколько лет назад тебе сказали, что в два часа ночи кому-то неожиданно понадобится купить тонну стали, ты бы сильно удивился и решил, что это возможно только во сне. Но сейчас ты знаешь, что для тех, кому не спится по ночам, такая опция вполне себе доступна.\n\nВ компании есть свой собственный интернет-магазин — нет-нет, не по продаже корпоративного мерча, а по продаже стали!"
                    }
                  </Text>
                </>
            case 2:
                return <>
                    <CircleWrapper>
                        <StyledCircle />
                    </CircleWrapper>
                    <Text>
                        {"Эта новая реальность стала возможной благодаря команде из «Северсталь- инфокома». И сейчас IT-команда не только помогает развивать бизнес и увеличивать продажи продуктов компании через цифровые решения, но и собирается выстроить глобальную платформу интернет-магазина для всех участников рынка металлургической промышленности.\n\n\n" +
                        "Нам предстоит много… Нет, очень много разработки. Кого берём в команду?"}
                    </Text>
                </>
            default:
                break;
        }
    }
    return <ProjectIntro project={project} step={step} setStep={setStep} isTopImg={true}>
        <Img src={circleProjectTop} alt={''} />
        {getContent()}
    </ProjectIntro>
}
export default ProjectIntro3
