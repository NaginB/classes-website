import styled from "styled-components";
import SuggestionImage  from '../../Assets/Images/suggestion-img.png'

export const SuggestionBox = styled.div`
  max-width: 90%;
  width: 350px;
  margin: auto;
  height: 180px;
  position: relative;
  border-radius: 10px;
  background: url("${SuggestionImage}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
`;

export const SugestionDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #ffffff;
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1/1;
  position: absolute;
  top: 65%;
  left: 18%;
  z-index: 10;
  transform: translate(-50%, -50%);
`;
