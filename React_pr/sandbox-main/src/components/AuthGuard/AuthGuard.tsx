import React from 'react';
import {useUnit} from "effector-react";

export type AuthGuardProps = {
  isAuth: boolean;
  privateFallback?: React.ReactNode;
  children?: React.ReactNode;
};

export const AuthGuard: React.FC<AuthGuardProps> = ({
  isAuth,
  children,
  privateFallback,
}) => {
  if (!isAuth){
    return <>{privateFallback}</>;
  }

  return <>{children}</>;
};