import React, { useEffect, useState } from 'react';
import {Navigate, Outlet, Route, Routes, useSearchParams} from 'react-router-dom';
import {Layout} from "../components/layout";
import { Main } from "../pages/main";
import {UserCard} from "../pages/user-card";
import {News} from "../pages/news";
import { Poster } from '../pages/poster/Poster';
import { About } from '../pages/about/About';
import {Event} from '../pages/event/Event';
import { ShowNews } from '../pages/shownews';


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
        <Route path="main" element={<Main />} />
        <Route path="main/:id" element={<UserCard />} />
        <Route path="news" element={<News />} />
        <Route path="poster" element={<Poster />} />
        <Route path="about_theater" element={<>О нас </>} />
        <Route path='/about' element={<About />} />
        <Route path='/event' element={<Event />} />
        <Route path="/event/:id" element={<Event />} />
         <Route path="/news/:id" element={<ShowNews />} />
        <Route index element={<Navigate to="/main" />} />
        

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
