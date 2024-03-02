import styled from "styled-components";
import { CommonButton, CommonInput } from '../../common-styles'

interface UserListProp {
    showUserList: boolean;
}

interface MessageShaderProp {
    isVisible: boolean;
}

export const MessageWrapper = styled.div`
    padding: 2rem;
    padding-bottom: 0;

    @media screen and (max-width: 800px){
        padding: 1rem;
    }
`;

export const MessageHeading = styled.h1`
    display: flex;
    align-items: center;
    gap: 1rem;
.menu-icon{
    display: none;
    cursor: pointer;
    @media screen and (max-width: 800px){
        display: block;
    }
}
`

export const MessageContainer = styled.div`
    padding-top: 1rem;
    width: 100%;
    height: calc(100vh - 72px);
    display: flex;

    @media screen and (max-width: 1200px) {
        height: calc(100vh - 122px);
    }
`

export const UserListWrallper = styled.div<UserListProp>`
    width: 320px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    padding-right: 0.5rem;
    transition: 0.3s;

    &:hover{
        overflow: auto;
    }

    @media screen and (max-width: 800px) {
        position: fixed;
        width: 70%;
        z-index: 10;
        background-color: #131313;
        height: 100vh;
        top: 0px;
        left: 0;
        transform: translateX(${({ showUserList }) => showUserList ? '0px' : '-100%'});
    }
`


export const MessageShader = styled.div<MessageShaderProp>`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: 30%;
    height: 100vh;
    background-color: #000;
    transition: 0.3s;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        opacity: ${({ isVisible }) => isVisible ? 0.5 : 0};
        pointer-events: ${({ isVisible }) => isVisible ? 'all' : 'none'};
    }
`;

export const MessageSection = styled.div`
    flex: 8;
    position: relative;
    display:flex;
    flex-direction: column;
`

export const SubscribeButton = styled.button`
    background: #000000;
    padding: .5rem 1rem;
    color: #ffffff;
    border-radius: 2rem;
    font-size: 1.1rem;
`;

export const SubscribeBox = styled.div`
    height: 60px;
    width: 100%;
    /* background: #393939; */
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MessagesWrapper = styled.div`
    flex: 1;
    color: white;
    overflow: auto;
`

export const MessageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NewMessageButton = styled(CommonButton)`
    padding: 0.5rem 1rem;
    color: white;
    background: #000000;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

export const MessageActionWrapper = styled.form`
    padding: 0 0.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: white;
    border-radius: 5px;

    @media screen and (max-width: 800px){
       /* padding: 0; */
    }
`

export const NewMessage = styled(CommonInput)`
    flex: 1;
    background-color: transparent;
    height: unset;
    padding: .8rem 0;
    font-size: 16px;
    border-radius: 7px;
    border: none;
    color: #767676;
    font-family: 'Noto Sans', sans-serif;
    opacity: 1;
    &::placeholder{
        color: #767676;
    }
`;

export const MessageActionBtn = styled.button<{ bgcolor?: string, color?: string }>`
    background-color: ${(props) => props.bgcolor ?? '#fff'};
    color: ${(props) => props.color ?? '#2F80ED'};
    width: 40px;
    height: 40px;
    aspect-ratio: 1/1;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .button-icon{
        font-size: 1.6rem;
    }
`

export const MessageBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`