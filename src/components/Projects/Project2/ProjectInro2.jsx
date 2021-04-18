import {getProjectById} from "../../../utils/getProjectById";
import ProjectIntro from "../../ProjectIntro";
import {Text} from "../../shared/Text";
import {StyledList} from "../../shared/StyledList";
import React, {useState} from "react";

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
                    <StyledList list={project.list}/>
                    <Text>
                        Коллеги смогут разбираться самостоятельно.
                        Но для того, чтобы все это заработало, нужно создать саму платформу.  Кого бы ты точно взял себе в команду для этого проекта?
                    </Text>
                </>
            default:
                break;
        }
    }
    return <ProjectIntro project={project} step={step} setStep={setStep}>
        {getContent()}
    </ProjectIntro>
}
export default ProjectIntro2