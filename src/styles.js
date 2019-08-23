import styled from 'styled-components';

export const Wrapper = styled.div`

  width: 100%;
  height: 100%;

  p {
    color: #707070;
    font-size: 24px;
    font-weight: bold;
  }


  @media screen and (min-width: 376px){
    width: 1806px;
    height: 700px;
    background-color: #1887DE;
    padding: 100px 153px;
  }
`;

export const Container = styled.div`
  
  width: 100%;
  height: 100%;
  background-color: #E4E4E4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;
  grid-template-areas: "text1 text2"
                        "card card"
                        "text3 text3"
                        "text4 text4";

  .txt1{
    grid-area: text1;
  }
  .txt2{
    grid-area: text2;
    text-align: right;
  }
  .txt3{
    width: 153px;
    grid-area: text3;
    margin: auto auto 0px auto;
  }
  .txt4{
    width: 153px;
    grid-area: text4;
    margin: 0px auto auto auto;
  }

  @media screen and (min-width: 376px){
    width: 1500px;
    height: 500px;
    grid-template-columns: 1fr 3fr 5fr;
    grid-template-rows: 1fr 3fr 1fr;
    grid-template-areas: "p1 p2 p3"
                          "p4 p5 p6"
                          "p7 p8 p9";

    .txt1{
      grid-area: p2;
      align-self: center;
    }
    .txt2{
      grid-area: p2;
      text-align: left;
      align-self: center;
      justify-self: end;
      margin-right: 110px;
    }
    .txt3{
      align-self: center;
      margin: 0px 0px 0px 153px;
      grid-area: p8;
    }
    .txt4{
      grid-area: p6;
      align-self: center;
      margin: 0px 0px 0px 30px;

    }
  }

`;

export const Card = styled.div`
    width: 302px;
    height: 360px;
    background-color: #1887DE;
    grid-area: card;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #fff;
    }

    @media screen and (min-width: 376px){
      width: 582px;
      height: 300px;
      background-color: #50FF78;
      grid-area: p5;
      justify-self: end;
      justify-content: start;
      margin: 0px;

      p {
        margin-left: 153px;
        color: #1887DE;
      }
    }
`;




