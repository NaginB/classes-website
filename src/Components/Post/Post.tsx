import React, { useState } from "react";
import * as P from "./style";
import PostHeader from "./PostHeader";
import PostSlider from "./PostSlider";
import PostFooter from "./PostFooter";
import PostFame from "./PostFame";

interface Props {
  locked?: boolean
}

const Post: React.FC<Props> = ({ locked = false }: Props) => {
  return (
    <P.Post $locked={locked}>
      <PostHeader />
      <PostSlider locked={locked} />
      {!locked && <PostFooter />}
      {!locked && <PostFame />}
    </P.Post>
  );
};

export default Post;
