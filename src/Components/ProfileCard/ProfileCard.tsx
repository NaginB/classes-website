import React from "react";
import * as P from "./style";
import ImageGallery from "../../Assets/Icons/ImageIcon";
import Folder from "../../Assets/Icons/Folter";
import { MdGroupAdd } from "react-icons/md";
import BlueTick from "../../Assets/Icons/BlueTick";
import UserImage from "../../Assets/Images/user-profile-img.png";

const ProfileCard: React.FC = () => {
  return (
    <P.ProfileCard>
      <P.ProfileImg src={UserImage} />
      <P.ProfileDetails className="flex-1">
        <P.ProfileTitleWrapper>
          <P.ProfileTitle className="text-white font-bold">
            Ranbir
          </P.ProfileTitle>
          <BlueTick />
        </P.ProfileTitleWrapper>
        <P.ProfileDetailBox>
          <P.ProfileEmail className="text-white">ranbir@fanxo</P.ProfileEmail>
          <div className="flex gap-5 mt-5 items-center">
            <P.ProfileIconWrapper className="flex">
              <ImageGallery />
              <span className="text-white">89</span>
            </P.ProfileIconWrapper>
            <P.ProfileIconWrapper className="flex">
              <Folder />
              <span className="text-white">89</span>
            </P.ProfileIconWrapper>
          </div>
        </P.ProfileDetailBox>
      </P.ProfileDetails>
      <P.SubscribeBtn>
        <MdGroupAdd />
        Subscribe
      </P.SubscribeBtn>
    </P.ProfileCard>
  );
};

export default ProfileCard;
