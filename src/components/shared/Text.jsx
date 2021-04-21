import styled from 'styled-components';
export const Text = styled.p`
    font-size: 13px;
    line-height: 22px;
    white-space: pre-wrap;
    @media all and (max-height: 750px){
        font-size: 3.2vw;
    } 
    
    @media all and (max-height: 570px){
        line-height: 18px;
    }
  
    @media all and (max-width: 300px){
        font-size: 10px;
        line-height: 18px;
    } 
    
    @media all and (min-width: 640px) {
        font-size: 20px;
        line-height: 30px;
    }
    
    @media all and (min-height: 640px) and (orientation: landscape){
          font-size: 18px;
    }
    
    @media screen and (min-width: 1100px){
        font-size: 24px;
        line-height: 30px;
    }
    
`
