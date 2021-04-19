import styled from "styled-components";

export const AnswerBtn = styled.button`
  outline: none;
  border: none;
  padding: 15px;
    & svg{
        width: 32px;
        height: 32px;
            @media all and (max-width: 300px){
              width: 25px;
              height: 25px;
            }
    }
    
    @media all and (max-height: 750px){
      padding: 10px;
    }
    @media all and (min-width: 1100px){
          width: 90px;
          height: 90px;
      }
    
`