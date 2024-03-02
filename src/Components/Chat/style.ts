import styled from "styled-components";

export const UserImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    object-fit: cover;
`


export const ChatUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    cursor: pointer;
    border-radius: 10px;
    .last-message-time{
        color: #8B8B8B;
        font-size: 12px;
    }

    &:hover{
        background-color: #393939;
    }
`

export const LastMessage = styled.div`
   font-size: 18px;
    color: #ffffff;
`

export const UserDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

export const MessageBox = styled.div``

export const MessageDate = styled.div.attrs(props => ({ className: 'font-roboto' }))`
    text-align: center;
    background-color: #353535;
    color: #9d9d9d;
    font-weight: 500;
    border: 5px;
    padding: .25rem .5rem;
    width: fit-content;
    margin: auto;
    position: sticky;
    top: 1rem;
    font-size: 14px;
    border-radius: 4px;
`

export const Messages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;
`

export const Message = styled.div<{ $remote: string }>`
    width: fit-content;
    max-width: 70%;
    ${props => props.$remote === 'false' && `margin-left: auto;`}
    padding: 1rem;
    padding-bottom: 0.4rem;
    font-size: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.$remote === 'true' ? '#ffffff' : '#2F80ED'};
    color: ${(props) => props.$remote === 'true' ? '#1B1A57' : '#ffffff'};
`

export const Text = styled.div``

export const Time = styled.div<{ $remote: string }>`
    color: ${(props) => props.$remote === 'true' ? '#A1A1BC' : '#ffffff'};
    font-size: 12px;
    text-align: right;
    margin-top: .5rem;
`
