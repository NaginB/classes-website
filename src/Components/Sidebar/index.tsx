import React, { useState } from "react";
import * as S from "./styles";
import { TiHome } from "react-icons/ti";
import { SidebarItems, UserMenu } from "./interface";
import { IoSearch } from "react-icons/io5";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import AppLogo from "../../Assets/Images/logo.svg";
import UserImage from "../../Assets/Images/user-profile-img.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [items] = useState<SidebarItems[]>([
    {
      id: 1,
      icon: <TiHome size={30} />,
      title: "Home",
      link: '/home'
    },
    {
      id: 2,
      icon: <IoSearch size={30} />,
      title: "Explore",
      link: '/explore'
    },
    {
      id: 3,
      icon: <PiChatTeardropTextFill size={30} />,
      title: "Messages",
      link: '/messages'
    },
    {
      id: 4,
      icon: <FaRegCircleUser size={30} />,
      title: "User",
      link: '',
      onClick: () => {
        setIsMenuOpen((prev) => !prev);
      }
    },
  ]);

  const [userMenu] = useState<UserMenu[]>([
    {
      title: 'Contact Support',
    },
    {
      title: 'Edit Profile',
    },
    {
      title: 'Change Password',
    },
    {
      title: 'Payment & Billing',
    },
    {
      title: 'Subscriptions',
    },
    {
      title: 'Sign Out',
    },
  ])

  const { pathname } = useLocation()

  return (
    <S.SidebardWrapper>
      <S.Logo src={AppLogo} />
      <S.ProfileImage src={UserImage} />
      <hr />
      <S.UserMenuContainer $open={isMenuOpen}>
        <S.MenuSheild onClick={() => setIsMenuOpen(false)} className="menu-sheild"></S.MenuSheild>
        <S.UserMenu className="user-menu">
          {userMenu.map((user, i) => (
            <S.UserMenuItem onClick={() => console.log(user)} key={`user-menu-${i}`}>
              <Link to={''} className="font-roboto-condense">{user.title}</Link>
            </S.UserMenuItem>
          ))}
        </S.UserMenu>
      </S.UserMenuContainer>
      <S.SidebarItems>
        {items.map((item) => (
          <S.SidebarItem onClick={(e) => {
            if (!item.onClick) return e;
            e.preventDefault();
            item.onClick();
          }} active={`${pathname === item.link}`} to={item.link} key={item.id}>
            {item.icon}
            <span className="item-title">{item.title}</span>
          </S.SidebarItem>
        ))}
      </S.SidebarItems>
    </S.SidebardWrapper >
  );
};

export default Sidebar;
