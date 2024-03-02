import React from "react";
import * as H from "./style";
import * as C from "../../common-styles";
import { TbSearch } from "react-icons/tb";
import Post from "../../Components/Post/Post";
import Suggesstion from "../../Components/Suggesstion";
import logoDark from '../../Assets/Images/FanxoDark.svg'

const Home: React.FC = () => {
  return (
    <H.HomeWrapper>
      <H.Feed>
        <H.Header className="flex items-center justify-center">
          <C.IconInputWrapper className="header-search">
            <C.CommonInput placeholder="Search" />
            <TbSearch color="#B3B3B3" className="input-icon" />
          </C.IconInputWrapper>
          <H.Logo className="logo-img" src={logoDark} />
        </H.Header>
        <H.FeedWrapper>
          {Array(10)
            .fill("")
            .map((_, index) => (
              <Post  key={`post-key-${index}`} />
            ))}
        </H.FeedWrapper>
      </H.Feed>
      <H.SuggestionWrapper>
        <H.Header className="flex items-center justify-center">
          <p className="text-xl text-white">Suggestions For You</p>
        </H.Header>
        <H.SuggestedContentWrapper>
          {Array(1)
            .fill("")
            .map((_, index) => (
              <Suggesstion key={`suggestion-key-${index}`} />
            ))}
        </H.SuggestedContentWrapper>
      </H.SuggestionWrapper>
    </H.HomeWrapper>
  );
};

export default Home;
