import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { news } from '../../helper/HelpNews';
import { useNavigate } from 'react-router-dom';
import './News.scss';

export const News = () =>{

    const navigate = useNavigate();
    const { id } = useParams();
    const newsItem = news.find(item => item.id === Number(id));

    if (!newsItem) {
        return <div>Новость не найдена</div>;
    }
    


  return (
   <div className='news_body'>
     <div className='news_news'>
        <div className='news_photo'>
            <img src={newsItem.photo} alt={newsItem.title_news}></img>
        </div>
        <div className='news_title_date'>
            <div className='news_title'>{newsItem.title_news}</div>
            <div className='news_date'>{newsItem.data_news}</div>
        </div>
        <div className='news_description'>{newsItem.description_news}</div>
        </div>
    </div>
  );
};