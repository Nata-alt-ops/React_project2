import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './Header.css';

type HeaderProps = {
  setIsAuthenticated: (value: boolean) => void;
};


export const Header = ({setIsAuthenticated}: HeaderProps) => {
  const {pathname} = useLocation();
  
  const navigate = useNavigate();

  const isActive = (path: string) => pathname === path;


 const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false); 
    navigate('/login');
  };

  /*const handleLogout = () => {
    logoutFn();
    navigate('/login'); 
    window.location.reload(); /*чтобы точно отобразилась что мы вышли из ака
  };*/

  const navigateMenu = [
    {
      name: 'Пользователи',
      path: '/users',
    },
    {
      name: 'Новости',
      path: '/news',
    },
    {
      name: 'О нас',
      path: '/about_us',
    },
    ];
   


  return (
    <div className={'header_con'}>
      <div className={'logo_nav_con'}>
        
        <div className={'logo'}>
          <div className='cirius'></div>
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
