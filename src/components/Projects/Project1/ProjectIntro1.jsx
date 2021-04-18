import React from "react";
import ProjectIntro from "../../ProjectIntro";
import {getProjectById} from "../../../utils/getProjectById";
import {StyledList} from "../../shared/StyledList";
import {Text} from "../../shared/Text";
import {TopImg} from "../../shared/TopImg";
import {circleProjectTop} from "../../../constants/images";


const ProjectIntro1 = () => {

    const project = getProjectById("1");
        return <ProjectIntro project={project} step={1}>
            <TopImg src={circleProjectTop} alt={''}/>
            <Text>
                {"...а в «Северсталь-инфокоме» создают платформу для создания чат-ботов! \nКоллеги так часто приходили с просьбой: «Запилите нам бота, пожалуйста», что пара уставших от этого IT-шников придумали кастомную платформу для создания ботов именно для внутреннего использования в «Северстали».\nЗадумка звучит очень логично: все типовые задачи будут решаться без участия it-команды, так что с запросами вроде:"}
            </Text>
            <StyledList list={project.list} />
            <Text>
                {"Коллеги смогут разбираться самостоятельно.\nНо для того, чтобы все это заработало, нужно создать саму платформу.  Кого бы ты точно взял себе в команду для этого проекта?"}
            </Text>
        </ProjectIntro>
}
export default ProjectIntro1