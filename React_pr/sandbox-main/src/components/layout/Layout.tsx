import React from 'react';
import {Header} from "../header/Header";



export type LayoutProps = {
  setIsAuthenticated: (value: boolean) => void;
  children?: React.ReactNode;
};

export const Layout = ({children, setIsAuthenticated }: LayoutProps) => {

  return (
    <div>
        <Header setIsAuthenticated={setIsAuthenticated} />
        
        {children}
    </div>
  )
};
