import styled from "styled-components";

export const Explore = styled.div`
  width: 500px;
  max-width: 95%;
  margin: auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media screen and (max-width: 600px) {
    padding-top: 10px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  &:hover {
    overflow: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
   flex-direction: column-reverse;
   h1{
    margin-top: 0;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
   }

   .input-wrapper{
    margin-bottom: 1rem;

    .explore-input{
      background: #262626;
      padding-left: 1rem;
      border-bottom: 0;
      height: 2.6rem;
      font-size: 18px;
      border-radius: 6px;
      opacity: 1;
    }
   }
  }
`;
