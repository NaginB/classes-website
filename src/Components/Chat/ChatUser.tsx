import React from 'react'
import * as C from './style';
import userImg from '../../Assets/Images/user-profile-img.png'

const ChatUser: React.FC = () => {
    return (
        <C.ChatUser>
            <C.UserDetail>
                <C.UserImage src={userImg} />
                <C.LastMessage className='text-white'>Lorem Ipsum</C.LastMessage>
            </C.UserDetail>
            <p className='last-message-time'>2d ago</p>

        </C.ChatUser>
    )
}

export default ChatUser
