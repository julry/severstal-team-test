import React from "react";
import styled from 'styled-components';
import {jackyChanov} from "../constants/images";
import {Text} from "./shared/Text";
import {ArrowLeft} from "./shared/svgIcons/ArrowLeft";
import {RefuseBtn} from "./shared/RefuseBtn";
import {ChooseBtn} from "./shared/ChooseBtn";
import {ArrowRight} from "./shared/svgIcons/ArrowRight";

const Wrapper = styled.div`
    padding: 27px;
    display: grid;
    grid-template-rows: 80px 33vh 270px auto;
`

const Title = styled.h3`
    grid-row: 1 / 2;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
`

const TextWrapper = styled.div`
    grid-row: 3 / 4;
`

const ImgWrapper = styled.div`
    grid-row: 2 / 3;
    margin-bottom: 10px;
    & img {
      max-height: 100%;
      max-width: 100%;
    }
`
const Position = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
`

const Name = styled(Position)`
    font-weight: 600;
`

const BtnWrapper = styled.div`
    display: flex;
    grid-row: 4/5;
    justify-content: center;
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
    }
`

const TeammateScreenWrapper = (props) => {
    const { teammate } = props;

    return <Wrapper>
        <Title>
            {"кого необходимо\nвзять в команду?"}
        </Title>
        <ImgWrapper>
            <img src={teammate.image} alt={''} />
        </ImgWrapper>
        <TextWrapper>
            <Name>{teammate.name}</Name>
            <Position>{teammate.position}</Position>
            <br />
            <Text>
                {teammate.description}
            </Text>
        </TextWrapper>
        <BtnWrapper>
            <Button>
                <ArrowLeft />
            </Button>
            <Refuse />
            <ChooseBtn />
            <Button>
                <ArrowRight />
            </Button>
        </BtnWrapper>
    </Wrapper>
}

export default TeammateScreenWrapper;