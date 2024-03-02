import React, { useState } from 'react'
import * as C from './styled';
import ChatUser from '../../Components/Chat/ChatUser';
import { TbPlus } from 'react-icons/tb';
import { IoMdMenu } from "react-icons/io";
import Messages from '../../Components/Chat/Messages';
import { MdMic } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { GoPaperAirplane } from "react-icons/go";


const Chat: React.FC = () => {
  const [showUserList, setShowUserList] = useState<boolean>(false);
  const [newMessage, setNewMessage] = useState<string>('');

  return (
    <C.MessageWrapper>
      <C.MessageShader
        isVisible={showUserList}
        onClick={() => setShowUserList(!showUserList)} />
      <C.MessageHeader>
        <C.MessageHeading className='text-white font-bold text-3xl'>
          <IoMdMenu
            onClick={() => setShowUserList(!showUserList)}
            className='menu-icon' />
          <span>Messages</span>
        </C.MessageHeading>
        <C.NewMessageButton>
          <TbPlus />
          <span>New Message</span>
        </C.NewMessageButton>
      </C.MessageHeader>

      <C.MessageContainer>
        <C.UserListWrallper showUserList={showUserList}>
          {Array(20).fill('').map((_, index) => (
            <ChatUser key={`user-${index}`} />
          ))}
        </C.UserListWrallper>

        <C.MessageSection>
          <C.SubscribeBox>
            <C.SubscribeButton>Subscribe for ₹  399/mo</C.SubscribeButton>
          </C.SubscribeBox>

          <C.MessagesWrapper>
            <Messages />
          </C.MessagesWrapper>

          <C.MessageActionWrapper>
            <C.MessageActionBtn color='#ffffff' bgcolor='transparent'>
              <BsEmojiSmile size={26} color='#8d8cac' className='button-icon' />
            </C.MessageActionBtn>
            <C.NewMessage placeholder='Write a message...' 
            //onChange={(e) => setNewMessage(e.target.value)} 
            />
            <C.MessageBtnWrapper>
              {
                newMessage ? <>
                  <C.MessageActionBtn color='#ffffff' bgcolor='transparent'>
                    <GoPaperAirplane size={24} color='#8d8cac' className='button-icon' />
                  </C.MessageActionBtn>
                </> :
                  <>
                    <C.MessageActionBtn color='#ffffff' bgcolor='transparent'>
                      <IoIosAttach size={30} color='#8d8cac' className='button-icon' />
                    </C.MessageActionBtn>
                    <C.MessageActionBtn color='#ffffff' bgcolor='#2F80ED'>
                      <MdMic className='button-icon' />
                    </C.MessageActionBtn>
                  </>
              }
            </C.MessageBtnWrapper>
          </C.MessageActionWrapper>
        </C.MessageSection>

      </C.MessageContainer>
    </C.MessageWrapper>
  )
}

export default Chat;
