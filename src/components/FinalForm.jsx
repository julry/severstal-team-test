import React, {useContext, useRef, useState} from "react";
import styled from  'styled-components';
import {Text} from "./shared/Text";
import {TopImg} from "./shared/TopImg";
import {Button} from "./shared/Button";
import {circleBgBtm} from "../constants/images";
import {ProgressContext} from "../context/ProgressContext";


const Wrapper = styled.div`
    height: 100%;
    padding: 3vh 5vw 20px;
`

const  Title = styled.h1`
     font-size: 24px;
     line-height: 29px;
     margin-bottom: 15px;
     @media screen and (max-width: 330px){ 
          max-width: 180px;
          font-size: 18px;
          line-height: 22px;
      }
      @media screen and (min-width: 640px){
        font-size: 30px;
        line-height: 33px;
      }
      
      @media screen and (min-width: 1100px){
        font-size: 36px;
        line-height: 40px;
      }
`

const Form = styled.form`
    position: relative;
    z-index: 3;
    @media screen and (min-width: 640px){
        max-width: 500px;
    }
    @media screen and (min-width: 1100px){
        margin: 0 auto;
    }
`
const Input = styled.input`
    border-radius: 5px;
    margin: 10px 0;
    border: none;
    padding: 10px;
    font-size: 15px;
    width:100%;
    font-family: 'Grtsk Peta', Tahoma, Geneva, sans-serif;
    
    @media screen and (min-width: 1100px){
        font-size: 20px;
        margin: 15px 0;
    }

    &:focus{ 
        outline: none;
        box-shadow: 0 0 3px 1px red;
    }
`
const Textarea = styled.textarea`
    border-radius: 5px;
    border: none;
    margin: 10px 0;
    padding: 10px;
    font-size: 15px;
    width:100%;
    min-height: 80px;
    font-family: 'Grtsk Peta', Tahoma, Geneva, sans-serif;

    @media screen and (min-width: 1100px){
        font-size: 20px;
        margin: 15px 0;
        min-height: 160px;

    }
    
    &:focus{ 
        outline: none;
        box-shadow: 0 0 3px 1px red;
    }
`


const StyledText = styled(Text)`
  max-width: 248px;
  margin-bottom: 10px;
  @media screen and (max-width: 330px){ 
      max-width: 180px;
  }
  @media screen and (min-width: 640px){
        max-width: 500px;
        margin-bottom: 30px;
  }
  
  @media screen and (min-width: 1100px){
        max-width: 700px;
  }
`
const CheckboxesWrapper = styled.div`
    margin: 10px 0;
    @media screen and (min-width: 1100px){
        margin: 15px 0;
    }
`
const Label = styled.label`
    max-width:400px;
    white-space: pre-wrap;
    @media screen and (min-width: 1100px){
        font-size: 24px;
      }
`

const SpanText = styled.span`
    font-size: 14px;
    font-style: italic;
`
const Required = styled.span`
    color: #ff0000;
`
const Checkmark = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(255, 255, 255, 0.57);
  border-radius: 50%;
  margin-right: 12px;
   @media screen and (min-width: 640px){
       width: 25px;
       height: 25px;
  }
`
const ContainerLabel = styled.label`
  padding-left: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & input {
      display: none;
  }
  @media screen and (min-width: 1100px){
        font-size: 20px;
  }
    
  display: flex;
  align-items: center;
  
  & input:checked + ${Checkmark}:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #FF0000;
    @media screen and (min-width: 640px){
        top: 2px;
        left: 2px;
        width: 19px;
        height: 19px;
  }
  }
`

const TextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const Divider = styled.hr`
    margin-top:10px;
    width:100%
`
const SubmitBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const TopImgStyled = styled(TopImg)`
  @media screen and (min-width: 1100px){
        position: fixed;
    }
`
const BtmImg = styled.img`
    display: none;
    @media screen and (min-width: 1100px){
        width: 330px;
        display:block;
        position: fixed;
        bottom:0;
        left:0;
    }
`

const ThanksTitle = styled.h1`
    position: absolute;
    width: 80%;
    text-align: center;
    top: 50%;
    left: 50%;
    font-size: 24px;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 330px){ 
          font-size: 22px;
          line-height: 32px;
      }
      @media screen and (min-width: 640px){
        font-size: 36px;
        line-height: 40px;
      }
      
      @media screen and (min-width: 1100px){
        font-size: 40px;
        line-height: 50px;
      }
`

const ThanksBtmImg = styled.img`
    width: 220px;
    position: fixed;
    bottom:0;
    left:0;
     @media screen and (min-width: 1100px){
        display: none;
    }
`

const ResetBtn = styled(Button)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 70px);
`

const GOOGLE_FORM_SURNAME_ID = 'entry.2027914724'
const GOOGLE_FORM_NAME_ID = 'entry.1281855192'
const GOOGLE_FORM_CITY_ID = 'entry.1843106524'
const GOOGLE_FORM_UNIVERSITY_ID = 'entry.603819468'
const GOOGLE_FORM_SPECIALTY_ID = 'entry.1744721763'
const GOOGLE_FORM_PROGRAM_OTHER_ID = 'entry.864306179.other_option_response'
const GOOGLE_FORM_YEAR_ID = 'entry.426795067'
const GOOGLE_FORM_PROGRAM_ID = 'entry.864306179'
const GOOGLE_FORM_INFO_ID = 'entry.918303636'
const GOOGLE_FORM_PHONE_ID = 'entry.1792120418'
const GOOGLE_FORM_EMAIL_ID = 'entry.355016017'
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXwP0Zze3aHO7upNUnBbpJMJS--9CuaZt2CcO9IhUW0VWZfQ/formResponse";

const FinalForm = () => {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [university, setUniversity] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [year, setYear] = useState('');
    const [programs, setPrograms] = useState([]);
    const [info, setInfo] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [otherProgram, setOtherProgram] = useState('');
    const [thanksScreen, setThanksScreen] = useState(true);
    const [error, setError] = useState(true);

    const onYearChange = (value)=> {
       if (!Number.isInteger(+value)) return;
       if(value.length>4) return;
       setYear(value);
    }

    const otherInput = useRef(null);

    const onProgramChoose = (e) => {
        if (programs.length > 2 && !programs.includes(e.target.value)) return;
        if (e.target.checked){
            setPrograms(programs=> [...programs, e.target.value ]);
        }
        else {
            setPrograms(programs=> programs.filter(program=> program!==e.target.value));
        }
    }

    const sendMessage = () => {
        const formData = new FormData();
        formData.append(GOOGLE_FORM_SURNAME_ID, surname);
        formData.append(GOOGLE_FORM_NAME_ID, name);
        formData.append(GOOGLE_FORM_CITY_ID, city);
        formData.append(GOOGLE_FORM_UNIVERSITY_ID, university);
        formData.append(GOOGLE_FORM_SPECIALTY_ID, speciality);
        formData.append(GOOGLE_FORM_YEAR_ID, year);
        formData.append(GOOGLE_FORM_PHONE_ID, phone);
        formData.append(GOOGLE_FORM_EMAIL_ID, email);

        for (let i = 0; i < programs.length; i++){
            if (programs[i] === 'other' && otherProgram!=='') {
                formData.append(GOOGLE_FORM_PROGRAM_ID, '__other_option__');
                formData.append(GOOGLE_FORM_PROGRAM_OTHER_ID, otherProgram);
            }else if(programs[i] !== 'other'){
                formData.append(GOOGLE_FORM_PROGRAM_ID, programs[i]);
            }
        }

        if (info!==''){
            formData.append(GOOGLE_FORM_INFO_ID, info);
        }

        const myInit = {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        };

        const myRequest = new Request(GOOGLE_FORM_ACTION_URL, myInit);

        fetch(myRequest).then(function(response) {
            return response;
        }).then(function(response) {
            setThanksScreen(true);
        }).catch(function(e){
            console.log(e);
            setError(true);
        });

    };

    const onReset = () => {
        setThanksScreen(false);
        setError(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendMessage()
    }
    return <Wrapper>
        <TopImgStyled />
        {thanksScreen ?
            <>
                {error ? <>
                        <ThanksTitle>??????-???? ?????????? ???? ??????, ?????????????? ???????????????????? ?? ???????????????????? ?? ???????????????? ??????</ThanksTitle>
                        <ResetBtn onClick={onReset}>?????????????????? ??????????</ResetBtn>
                    </>
                    :
                    <ThanksTitle> ??????????????, ???????? ???????????? ??????????????!</ThanksTitle>
                }
                <ThanksBtmImg src={circleBgBtm}/>
            </>
        : <>
            <Title>
                ???????????? ???????????? ???? ????????????????????
            </Title>
            <StyledText>
                ?????????? ???????? ????????????????????, ???????????????????? ????????????, ?? ?????? ?????????? ???????????????? c?????????????????? <b>Delivery Club</b>  ?????????????????? <b>5 000</b> ????????????.
            </StyledText>
            <Form onSubmit={handleSubmit}>
                <Label>?????????????? <Required>*</Required></Label>
                <Input type="text" placeholder="??????????????" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} required />

                <Label>?????? <Required>*</Required></Label>
                <Input type="text" placeholder="??????" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <Label>?????????? <Required>*</Required></Label>
                <Input type="text" placeholder="??????????" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />

                <Label>?????? <Required>*</Required></Label>
                <Input type="text" placeholder="??????" name="university" value={university} onChange={(e) => setUniversity(e.target.value)} required />

                <Label>?????????????????????????? <Required>*</Required></Label>
                <Input type="text" placeholder="??????????????????????????" name="speciality" value={speciality} onChange={(e) => setSpeciality(e.target.value)} required />

                <Label>?????? ?????????????????? <Required>*</Required></Label>
                <Input type="text" placeholder="?????? ??????????????????" name="year" value={year} onChange={(e) => onYearChange(e.target.value)} required />

                <Label>?????????? ?????????????????? ???????????????????? ???????? ????????????????????????????? ???? ???????????? ???????????????? ???????? ?????????????? ?? ???????? ????????????????. <Required>*</Required> <SpanText>{"\n ???? ?????????? ???????? ??????????????????."}</SpanText></Label>
                <CheckboxesWrapper>
                    <ContainerLabel className="container">
                        <input
                            type="checkbox"
                            value={'?????????????????????? sap'}
                            checked={programs.includes('?????????????????????? sap')}
                            onChange={(e) => onProgramChoose(e)}
                        />
                        <Checkmark/>
                        <TextWrapperStyled>
                            ?????????????????????? SAP
                        </TextWrapperStyled>
                    </ContainerLabel>
                    <ContainerLabel className="container">
                        <input
                            checked={programs.includes('?????????????????????? 1??')}
                            type="checkbox"
                            value={'?????????????????????? 1??'}
                            onChange={(e) => onProgramChoose(e)}
                        />

                        <Checkmark/>
                        <TextWrapperStyled>
                            ?????????????????????? 1??
                        </TextWrapperStyled>
                    </ContainerLabel>
                    <ContainerLabel className="container">
                        <input
                            checked={programs.includes('????????????-????????????????')}
                            type="checkbox"
                            value={'????????????-????????????????'}
                            onChange={(e) => onProgramChoose(e)}
                        />
                        <Checkmark/>
                        <TextWrapperStyled>
                            ????????????-????????????????
                        </TextWrapperStyled>
                    </ContainerLabel>
                    <ContainerLabel className="container">
                        <input
                            checked={programs.includes('Java developer (????????????)')}
                            type="checkbox"
                            value={'Java developer (????????????)'}
                            onChange={(e) => onProgramChoose(e)}
                        />
                        <Checkmark/>
                        <TextWrapperStyled>
                            Java developer (backend)
                        </TextWrapperStyled>
                    </ContainerLabel>
                    <ContainerLabel className="container">
                        <input
                            checked={programs.includes('JavaScript developer (????????????????')}
                            type="checkbox"
                            value={'JavaScript developer (????????????????'}
                            onChange={(e) => onProgramChoose(e)}
                        />
                        <Checkmark/>
                        <TextWrapperStyled>
                            JavaScript developer (frontend)
                        </TextWrapperStyled>
                    </ContainerLabel>
                    <ContainerLabel className="container">
                        <input
                            checked={programs.includes('SAP UI5 developer')}
                            type="checkbox"
                            value={'SAP UI5 developer'}
                            onChange={(e) => onProgramChoose(e)}
                        />
                        <Checkmark/>
                        <TextWrapperStyled>
                            SAP UI5 developer
                        </TextWrapperStyled>
                    </ContainerLabel>

                    <ContainerLabel className="container">
                        <input
                            checked={programs.includes('ABAP developer')}

                            type="checkbox"
                            value={'ABAP developer'}
                            onChange={(e) => onProgramChoose(e)}
                        />
                        <Checkmark/>
                        <TextWrapperStyled>
                            ABAP developer
                        </TextWrapperStyled>
                    </ContainerLabel>
                    <ContainerLabel className="container">
                        <input
                            checked={programs.includes('DevOps ??????????????')}
                            type="checkbox"
                            value={'DevOps ??????????????'}
                            onChange={(e) => onProgramChoose(e)}
                        />
                        <Checkmark/>
                        <TextWrapperStyled>
                            DevOps ??????????????
                        </TextWrapperStyled>
                    </ContainerLabel>
                    <ContainerLabel className="container">
                        <input
                            checked={programs.includes('other')}
                            type="checkbox"
                            value={'other'}
                            onChange={(e) => onProgramChoose(e)}
                        />
                        <Checkmark/>
                        <TextWrapperStyled>
                            ????????????
                        </TextWrapperStyled>
                    </ContainerLabel>
                    {programs.includes('other') && <Input ref={otherInput} placeholder={'????????????'} value={otherProgram}
                                                          onChange={(e) => setOtherProgram(e.target.value)}/>}
                </CheckboxesWrapper>

                <Label>???????????????? ?? ???????? ??????, ?????? ???????????????????? ????????????</Label>
                <Textarea placeholder="???????????????????? ?? ????????"  value={info} onChange={e=>  setInfo(e.target.value)}/>

                <Label>?????????? ???????????????? <Required>*</Required></Label>
                <Input type="tel" placeholder="?????????? ????????????????" name="XmnwAc" value={phone} onChange={e => setPhone(e.target.value)} required />

                <Label>E-mail <Required>*</Required></Label>
                <Input type="email" placeholder="E-mail" name="XmnwAc" value={email} onChange={e => setEmail(e.target.value)} required />

                <Divider/>
                <SubmitBtn>
                    <Button type="submit">??????????????????</Button>
                </SubmitBtn>
            </Form>
            </>
        }
        <BtmImg src={circleBgBtm} alt={''}/>
    </Wrapper>
}

export default FinalForm;