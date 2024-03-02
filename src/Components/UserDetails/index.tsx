import React from 'react'
import * as D from './style'
import { MdGroupAdd, MdVerified } from "react-icons/md";
import backgroundImg from '../../Assets/Images/view-profile-cover.jpeg'
import profileImg from '../../Assets/Images/profileGirl2.jpeg'
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { LuFolderLock } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";




const UserDetails: React.FC = () => {
  return (
    <D.Details>
      <div className='flex gap-2 items-start'>
        <div>
          <h1 className='text-white text-2xl font-inter'>Keyla Void</h1>
          <span className='font-inter text-[#FFFFFFAB]'>@kaylaVoid</span>
        </div>
        <MdVerified color='#6FB1FC' className='mt-1.5' />
      </div>
      <D.ImageBox>
        <D.ProfileBackgroundImage src={backgroundImg} />
        <D.ProfileImage src={profileImg} />
        <D.DetailsFooter>
          <div className='flex items-center gap-5 mb-5'>
            <D.CountDetail>
              <CiImageOn size={32} color='white' strokeWidth={1} />
              <span className='text-white'>20</span>
            </D.CountDetail>
            <D.CountDetail>
              <LuFolderLock size={32} color='white' strokeWidth={1} />
              <span className='text-white'>20</span>
            </D.CountDetail>
          </div>
          <div className='flex items-center justify-between'>
            <D.SubscribeBtn>
              <MdGroupAdd color='black' size={24} />
              <span className='font-inter'>Subscribe Rs499/Mo</span>
            </D.SubscribeBtn>
            <div className='flex items-center justify-between gap-3'>
              <D.QuickAction>
                <AiOutlineMessage size={30} color='#000' />
              </D.QuickAction>
              <D.QuickAction>
                <HiOutlineCurrencyRupee size={30} color='#000' />
              </D.QuickAction>
            </div>
          </div>
        </D.DetailsFooter>
      </D.ImageBox>
    </D.Details>
  )
}

export default UserDetails
