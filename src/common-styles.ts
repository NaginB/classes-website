import styled from "styled-components";

export const CommonInput = styled.input`
  width: 100%;
  height: 2rem;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #8f8f8f;
  color: #8f8f8f;
  opacity: 56%;
  //   font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

export const CommonButton = styled.button`
  background-color: #313131;
  padding: 0.8rem 2rem;
  color: #767676;
  text-align: center;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  font-size: 16px;
  &:hover {
    background: #fff;
    color: #000;
  }
  //   font-family: "Roboto", sans-serif;
`;

export const CommonIonButton = styled.button`
  background-color: transparent;
  border: 0.6px solid #fff;
  width: 100%;
  padding: 0.5rem 0;
  color: white;
  text-align: center;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  gap: 1rem;
`;

export const IconInputWrapper = styled.div`
position: relative;
.input-icon{
  position: absolute;
  top: 50%;
  left: 95%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: #767676;
}
`

export const ColoredBtn = styled.button`
  z-index: 5;
  border: none;
  /* background: linear-gradient(90deg, #C1EFFE 0%, #D5C2FD 51.5%, #E9B9FE 100%); */

  background: linear-gradient(90.08deg, #0D6AC3 1.6%, rgba(200, 122, 227, 0.99) 55.89%, rgba(253, 145, 1, 0.99) 102.66%);

  padding: 0.8rem 1rem;
  border-radius: 50px;
  width: unset;
  box-shadow: 0px 0px 7px 2px #00000040;
`