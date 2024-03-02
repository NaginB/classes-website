import React from "react";
import * as S from "./style";
import UserImage from "../../Assets/Images/user-profile-img.png";

const Suggesstion: React.FC = () => {
  return (
    <S.SuggestionBox>
      <S.ProfileImage src={UserImage} />
      <S.SugestionDetails>
        <div>
          <p>Ranbir</p>
          <p>ranbir@fanxo</p>
        </div>
      </S.SugestionDetails>
    </S.SuggestionBox>
  );
};

export default Suggesstion;
