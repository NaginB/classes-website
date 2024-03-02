import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Account = styled.div`
  width: 1200px;
  max-width: 90%;
  margin: 0 auto;

  h1{
    margin: 4rem auto;
    font-size: 2rem;
    font-weight: 700;
  }
`;


export const AccountLinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const AccountLinkBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #898989;
  h3{
    font-size: 1.7rem;
    color: white;
    font-weight: 600;
  }

  svg{
    color: white;
    font-size: 1.7rem;
  }
`;