import styled from "styled-components";
import { CommonButton, CommonIonButton } from "../../common-styles";

export const Details = styled.div`
  margin-top: 1rem;
`

export const ImageBox = styled.div`
  width: 100%;
  height: 300px;
  margin-top: .6rem;
  border-radius: 1.5rem;
  position: relative;
`

export const ProfileBackgroundImage = styled.img`
  position: absolute;
  border-radius: 1.5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const SubscribeBtn = styled(CommonIonButton)`
    z-index: 5;
    border: none;
    background: linear-gradient(90deg, #C1EFFE 0%, #D5C2FD 51.5%, #E9B9FE 100%);
    padding: 0.8rem 1rem;
    border-radius: 50px;
    width: unset;
    box-shadow: 0px 0px 7px 2px #00000040;
    span{
      font-size: 15px;
      font-weight: 600;
      color: black;
    }
`;

export const DetailsFooter = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  bottom: -1.2rem;
  left: 1rem;
`

export const QuickAction = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(90deg, #C1EFFE 0%, #D5C2FD 51.5%, #E9B9FE 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 7px 2px #00000040;
`

export const CountDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-right: 1rem;
  border-right: 1px solid black;
  &:last-child{
    padding-right: 0;
    border: 0
  }
`

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #131313;
  object-fit: cover;
  z-index: 10;
  position: absolute;
  top: 0;
  right: 15%;
  transform: translate(50%, -50%);
`