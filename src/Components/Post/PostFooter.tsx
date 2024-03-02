import React from 'react'
import * as P from "./style";
import CommentIcon from "../../Assets/Icons/Comment";
import { CiHeart } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import SaveIcon from "../../Assets/Icons/SaveIcon";

const PostFooter: React.FC = () => {
  return (
    <P.PostFooter>
      <P.ActionWrapper>
        <CiHeart className="text-white" size={36} />
        <CommentIcon />
        <HiOutlineCurrencyRupee strokeWidth={1} className="text-white" size={34} />
      </P.ActionWrapper>
      <div className="cursor-pointer">
        <SaveIcon />
      </div>
    </P.PostFooter>
  )
}

export default PostFooter;
