import styled from "styled-components";

export const RoutesWrapper = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;

    @media screen and (max-width: 1200px) {
      height: unset;
      flex-direction: column-reverse;
    }
`

export const Content = styled.div`
    overflow: auto;
    width: 100%;
    background-color: #131313;
    @media screen and (max-width: 1200px) {
      flex-direction: column-reverse;
      height: calc(100vh - 50px);
    }
`