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
        <div className={'logo_button'}>
          <div className={'logo'}>
            <img src='/logo.jpg' alt='' className={'logo_img'}></img>
          </div>
          <div className={'button desktop-only'}>
            {navigateMenu.map((menu) => (
              <div 
                key={menu.path} 
                onClick={() => navigate(menu.path)} 
                className={isActive(menu.path) ? 'navigate-active' : 'navigate'}
              >
                {menu.name}
              </div>
            ))}
          </div>
        </div>
        
        <div className='mobile-menu '>
          <div className='mobile-only'>
          <span className='theater-name'>Казанский ТЮЗ</span>
          <div className='menu'>
            <span>
              <img src='/Group 209.png' alt=''></img>
            </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};