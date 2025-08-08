import React from 'react';
import {Header} from "../header/Header";



export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {

  return (
    <div>
        <Header />
        
        {children}
    </div>
  )
};
