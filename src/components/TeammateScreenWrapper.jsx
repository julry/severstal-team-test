import React, {useContext, useState} from "react";
import styled from 'styled-components';
import {Text} from "./shared/Text";
import {ArrowLeft} from "./shared/svgIcons/ArrowLeft";
import {RefuseBtn} from "./shared/RefuseBtn";
import {ChooseBtn} from "./shared/ChooseBtn";
import {ArrowRight} from "./shared/svgIcons/ArrowRight";
import {ProgressContext} from "../context/ProgressContext";
import {TopImg} from "./shared/TopImg";
import {ChooseIcon} from "./shared/svgIcons/ChooseIcon";
import {RefuseIcon} from "./shared/svgIcons/RefuseIcon";
import {getTeammate} from "../utils/getTeammate";
import {getProjectById} from "../utils/getProjectById";

const Wrapper = styled.div`
    padding: 3.3vh 27px 3vh;
    display: grid;
    grid-template-rows: 3.7em auto 26vh 290px auto;
    white-space: pre-wrap;
    overflow: hidden;
    @media all and (max-height: 750px){
       grid-template-rows: 9vh auto 24.5vh 15.5em auto;
    }
    @media all and (max-height: 570px){
       grid-template-rows: 10.3vh auto 21.5vh 14em auto;
    }

    @media all and (min-width: 640px) {
        padding: 30px 50px 0;
        grid-template-rows: 9vh auto 32.15vh 24.5em auto;
    }
    
    @media all and (min-height: 640px) and (orientation: landscape) {
        padding: 30px 50px 0;
        grid-template-rows: 11vh auto 32.15vh auto;
        grid-template-columns: 470px  auto;
    }

    @media screen and (min-width: 1100px){
       max-width: none;
       padding: 85px 61px 0;
       white-space: normal;
       grid-template-rows: 45px auto 400px auto;
       grid-template-columns: 640px 555px;
    }
`

const Title = styled.h3`
    grid-row: 1 / 2;
    grid-column: 1 / 3;

    font-size: 20px;
    line-height: 29px;
    text-transform: uppercase;
    @media all and (max-height: 750px){
       font-size: 18px;
    }
    @media screen and (min-width: 640px){
       font-size: 34px;
       line-height: 45px;
    }
`

const TextWrapper = styled.div`
    grid-row: 4 / 5;
    max-width: 560px;
    
    @media all and (min-height: 640px) and (orientation: landscape){
        max-width: fit-content;
        grid-row: 2/3;
        grid-column: 1/2;
        padding-top: 100px;
    }
    
    @media screen and (min-width: 1100px){
        padding-top: 0;
        grid-column: 1/2;
        grid-row: 3/4;
    }
    
`

const ImgWrapper = styled.div`
    grid-row: 3 / 4;
    margin-bottom: 10px;
    position: relative;
    & img {
      max-height: 100%;
      max-width: 100%;
    }
    
    @media all and (min-height: 640px) and (orientation: landscape){
          grid-row: 2 / 3;
          grid-column: 2/3;
          padding-left: 30px;
    }
    
    @media all and (min-width: 1100px){
        max-width: 404px;
        height: 396px;
        grid-row: 3/4;
        grid-column: 2/3;
        margin-left: 60px;
        margin-top: -55px;
    }
    
   
`

const Chosen = styled(ChooseIcon)`
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 22vh;
    
     @media all and (max-width: 330px){
       left: 18vh;
       width: 20px;
       height: 20px;
    }
    
    @media all and (min-width: 640px){
       left: 30vh;
    }
    
    @media all and (min-width: 1000px){
        width: 60px;
        height: 60px;
        left: auto;
        bottom: 30px;
        right: 20px;
    }
`

const Refused = styled(RefuseIcon)`
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 22vh;
    
    @media all and (max-width: 330px){
       width: 20px;
       height: 20px;
    }
    
    @media all and (min-width: 640px){
       left: 30vh;
    }
    
    @media all and (min-width: 1000px){
        width: 60px;
        height: 60px;
        left: auto;
        bottom: 25px;
        right: 20px;
    }
`

const Position = styled.p`
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 7px;
    width: max-content;
    
    @media all and (max-height: 750px){
       font-size: 15px;
    }
     @media all and (min-width: 640px){
        width: fit-content;
        font-size: 32px;
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
    @media all and (max-width: 639px){
        display: none;
    }
`

const BtnWrapper = styled.div`
    display: flex;
    grid-row: 5 / 6;
    justify-content: center;
    & button{   
        cursor: pointer;
    }

    @media all and (min-width: 640px){
       justify-content: left;
       margin-left: -20px;
    }
    @media all and (min-height: 640px) and (orientation: landscape){
        grid-row: 3 / 4;
        grid-column: 2 / 3;
        max-height: 70px;
        margin-left: 13%;
    }

    @media all and (min-width: 1100px){
        margin: -40px 0 0;
        max-height: none;
        justify-content: center;
        grid-row: 4/5;
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
    grid-row: 6/7;
    cursor: pointer;

    @media all and (min-width: 640px){
        max-width: 280px;
    }
    
    @media all and (min-height: 640px) and (orientation: landscape){
        grid-row: 3 / 4;
        grid-column: 1/2;
        max-height: 70px;
        max-width: 270px;
    }
    
    @media all and (min-width: 1100px){
        max-width: 350px;
        margin: -40px 0 0;
        grid-column: 1/2;
        padding: 23px 18px;
        grid-row: 4 / 5;
        font-size: 24px;
        line-height: 20px;
        min-height: 90px;
    }
`

const AnswerPersonsWrapper = styled.div`
    display: flex;
    grid-row: 2/3;
    flex-wrap: wrap;
    margin: 10px 0;
    width: 80% !important;
    
    @media all and (min-height: 640px) and (orientation: landscape){
        grid-column: 1 / 2;
    }
    @media all and (min-width: 1100px){
        grid-column: 1 / 2;
    }
`

const AnswerPerson = styled.div`
    width: 40px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 3px;
    margin-right: 5px;
    margin-bottom: 5px;
    border: 1px solid white;
    
    & img{
        height: 30px;
        width: 30px;
    }
    
    @media all and (min-width: 1100px){
        width: 60px!important;
        height: 60px;
        
        & img{
            height: 50px;
            width: 50px;
        }
        
    }
    
   
`
const TeammateScreenWrapper = (props) => {
    const { projectId, teammate, isLast } = props;

    const { setNext, setAnswer, setPrev, countPoints, answers, refused} = useContext(ProgressContext);

    const [isPressedChoose, setIsPressedChoose] = useState(answers[projectId] ? answers[projectId].includes(teammate.id) : false);
    const [isPressedRefuse, setIsPressedRefuse] = useState( refused[projectId] ? refused[projectId].includes(teammate.id) : false);


    const getAnswerPersons = () =>{
        if (answers[projectId]){
           return answers[projectId].map(x=>
               getTeammate(x, projectId).image
           )
        }
        return [];
    }

    const [answerPersons, setAnswerPersons] = useState(getAnswerPersons());
    const correctLength = getProjectById(projectId).team.filter(teammate => teammate.isCorrect).length;
    let possibleLength = correctLength - answerPersons.length;
    possibleLength = possibleLength > 0 ? possibleLength : 0;
    const [possiblePersons, setPossiblePersons] = useState(Array.from(Array(possibleLength).keys()));

    const onRefuse = () => {
        setAnswer(projectId, teammate.id, 'refuse');
        setIsPressedRefuse(true);
        setIsPressedChoose(false);

        if (!isLast)  setTimeout(setNext, 1500)
    }

    const onChoose = () => {
        setAnswer(projectId, teammate.id, 'choose');
        setIsPressedRefuse(false);
        setIsPressedChoose(true);
        const pers = [...possiblePersons];
        pers.pop();
        setPossiblePersons(pers);
        if (!isLast)  setTimeout(setNext, 1500)
    }

    const onFinish = () => {
        countPoints(projectId);
        setNext();
    }

    return <Wrapper>
        <Img/>
        <Title>
            {"кого необходимо\nвзять в команду?"}
        </Title>
        <AnswerPersonsWrapper>
            {
                <>
                    {answerPersons.map(x =>
                        <AnswerPerson key={x}>
                            <img src={x} alt={''}/>
                        </AnswerPerson>)}
                    {isPressedChoose&&!answerPersons.includes(teammate.image)&& <AnswerPerson >
                        <img src={teammate.image}  alt={''}/>
                    </AnswerPerson>}
                    {possiblePersons.map(x=><AnswerPerson key={x}/>)}
                </>
            }
        </AnswerPersonsWrapper>

        <ImgWrapper>
            {isPressedRefuse&&<Refused fill={'red'} />}
            {isPressedChoose&&<Chosen fill={'#00b674'}/>}
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
            <Button onClick={setPrev}>
                <ArrowLeft />
            </Button>
            <Refuse onClick={onRefuse} style={isPressedRefuse ? {backgroundColor: '#a30000'} : {}} />
            <ChooseBtn onClick={onChoose} style={isPressedChoose ? {backgroundColor: '#008755'} : {}}/>
            {!isLast ? <Button onClick={setNext}>
                <ArrowRight/>
            </Button>
                : <Button />
            }
        </BtnWrapper>
        {isLast&&<FinishBtn onClick={onFinish}>Сформировать команду</FinishBtn>}

    </Wrapper>
}

export default TeammateScreenWrapper;