import React, { useEffect, useState } from 'react';
import {Navigate, Outlet, Route, Routes, useSearchParams} from 'react-router-dom';
import {Layout} from "../components/layout";
import {Users} from "../pages/users";
import {UserCard} from "../pages/user-card";
import {News} from "../pages/news";
import { AuthGuard } from '../components/AuthGuard/AuthGuard';
import { LoginForm } from '../pages/Login/LoginForm';

export const AppRoutes = () => {
  const[isAuthenticated, setIsAuthenticated ] = useState(false);
  
  useEffect(():void => {
    const savedAuth:string|null = localStorage.getItem('isAuthenticated');
    if (savedAuth) {
      setIsAuthenticated(JSON.parse(savedAuth));
    }
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard isAuth={isAuthenticated}  privateFallback={<LoginForm setIsAuthenticated={setIsAuthenticated} />}>
            <Layout setIsAuthenticated={setIsAuthenticated}>
              <Outlet />
            </Layout>
            </AuthGuard>
        }
      >
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserCard />} />
        <Route path="news" element={<News />} />
        <Route path="about_us" element={<>О нас</>} />
        <Route index element={<Navigate to="/users" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
