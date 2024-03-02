import styled from "styled-components";

export const SignUpWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #1d1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 2rem 0;
`;

export const SignUpContainer = styled.div`
  width: 600px;
  max-width: 95%;
  // height: 85vh;
  border-radius: 0.7rem;
  margin: auto;
  background-color: #000;
  padding: 2rem 0;
`;

export const ColoredLogo = styled.img`
  width: 150px;
  max-width: 90%;
  margin: auto;
  display: block;
  margin-top: 2rem;
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 3rem auto;
  h1 {
    color: white;
    font-size: 1.8rem;
    font-weight: 100;
  }

  .login-form {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .or-title {
    color: #4d4d4d;
    position: relative;
    text-align: center;
    span {
      background-color: #000000;
      position: relative;
      padding: 0 1rem;
      font-family: "Noto Sans", sans-serif;
    }
    &:before {
      content: "";
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 1px;
      background: #4d4d4d;
    }
  }
`;
