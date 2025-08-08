import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './Header.scss';


export const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => pathname === path;
  const navigateMenu = [
    {
      name: 'Главная',
      path: '/main',
    },
    {
      name: 'Афиша',
      path: '/poster',
    },
    {
      name: 'Новости',
      path: '/news',
    },
    {
      name: 'О театре',
      path: '/about_theater',
    },
    ];
  return (
    <div className={'header_con'}>
      <div className={'logo_nav_con'}>
        
        <div className={'logo'}>
          <img src='/logo.jpg'></img>
        </div>
        <div className={'header'}>
          {navigateMenu.map((menu) => (
            <div onClick={() => navigate(menu.path)} className={isActive(menu.path) ? 'navigate-active' : 'navigate'}>
              <>{menu.name}</>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
