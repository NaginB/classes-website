import styled from "styled-components";
import { Link } from 'react-router-dom'

export const SidebardWrapper = styled.div`
  width: 250px;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #252525;
  color: white;
  overflow: auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: unset;
  }

  hr {
    width: 90%;
    height: 1px;
    background-color: #d9d9d9;
    opacity: 50%;
    border: none;
    margin: 3rem auto;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 80%;
  object-fit: cover;
  margin: 3rem auto;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 1rem;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  z-index: 500;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 0;
    background: linear-gradient(90deg, #C1F1FF 0%, #C6CAFD 49.41%, #ECB8FF 100%);
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

export const SidebarItem = styled(Link) <{ active: string }>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  cursor: pointer;

  svg{
    position: relative;
    bottom: 3px;
    @media screen and (max-width: 1200px) {
        color: black;
        bottom: 0;
        width: 40px;
        height: 40px;
        padding: 7px;
        border-radius: 50%;
       ${({ active }) => active === 'true' ? `
        background: linear-gradient(90deg, rgba(111, 177, 252, 0.43) 0%, rgba(157, 0, 212, 0.21) 100%);
       ` : ''}

        &:hover{
          background: linear-gradient(90deg, rgba(111, 177, 252, 0.43) 0%, rgba(157, 0, 212, 0.21) 100%);
        }
    }

  }
  .item-title {
    font-size: 18px;
    position: relative;
    bottom: 1px;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;


export const UserMenuContainer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  z-index: 500;
  pointer-events: none;

  @media screen and (min-width: 1200px) {
    z-index: 600;
    height: 100%;
  }

  ${({ $open }) => $open === true ? `
    pointer-events: all;
    .menu-sheild{
      opacity: 1;
      pointer-events: all;
    }

    .user-menu{
      transform: translateY(0);
    }
  ` : ``
  }
`;

export const MenuSheild = styled.div`
  background-color: #ffffff61;
  flex: 1;
  opacity: 0;
  pointer-events: none;
  backdrop-filter: blur(5px);
  transition: 0.3s;
`;

export const UserMenu = styled.div`
  background-color: black;
  transform: translateY(30rem);
  padding: 2rem 1rem;
  z-index: 500;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: 0.3s;
`;

export const UserMenuItem = styled.div`
  color: white;
  font-size: 1.2rem;
  padding-bottom: .5rem;
  z-index: 500;
  position: relative;
  border-bottom: 1px solid #FFFFFF3D;
  &:last-child{
    border-bottom: none;
    padding-bottom: 0;
  }
`
