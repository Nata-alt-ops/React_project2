import React, { useEffect, useState } from 'react';
import {Navigate, Outlet, Route, Routes, useSearchParams} from 'react-router-dom';
import {Layout} from "../components/layout";
import {Users} from "../pages/users";
import {UserCard} from "../pages/user-card";
import {News} from "../pages/news";


import { Poster } from '../pages/poster/Poster';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Layout>
              <Outlet />
            </Layout>
          
        }
      >
        <Route path="main" element={<Users />} />
        <Route path="main/:id" element={<UserCard />} />
        <Route path="news" element={<News />} />
        <Route path="poster" element={<Poster />} />
        <Route path="about_theater" element={<>О нас</>} />
        <Route index element={<Navigate to="/main" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
