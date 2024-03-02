import React from 'react'
import * as P from "./style";
import UserImage from "../../Assets/Images/user-profile-img.png";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const PostHeader: React.FC = () => {
  const navigate = useNavigate()
  return (
    <P.Header className='cursor-pointer' onClick={() => navigate('/profile/1')}>
      <div className="flex items-center gap-3">
        <P.UserImage src={UserImage} alt="user" />
        <div>
          <P.UserTitle>Ranbir</P.UserTitle>
          <P.PostLocation>Tokyo, Japan</P.PostLocation>
        </div>
      </div>
      {/* <P.Time>16 Hours ago</P.Time> */}
      <BsThreeDots color={'#ffffff'} />
    </P.Header>
  )
}

export default PostHeader
