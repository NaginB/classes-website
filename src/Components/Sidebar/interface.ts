import React from "react";

export interface SidebarItems {
  id: number;
  icon: React.ReactNode;
  title: string;
  link: string;
  onClick?: () => void;
}

export interface UserMenu{
  title:string;
}
