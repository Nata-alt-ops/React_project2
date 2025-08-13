import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { news } from '../../helper/HelpNews';
import { useNavigate } from 'react-router-dom';
import './News.scss';

export const News = () =>{

    const navigate = useNavigate();
    
    


  return (
   <div className='news_body'>
     <div className='news_news'>
        <h1 className='news_h1text'>Новости театра</h1>
        <div className='news_con'>
        {news.map((newsItem) => (
          <div key={newsItem.id} className='news_item' >
        <div className='news_photo'>
            <img src={newsItem.photo} alt={newsItem.title_news} className='news_img'></img>
        </div>
        <div className='news_title_date'>
            <div className='news_title' onClick={() => navigate(`/news/${newsItem.id}`)}>{newsItem.title_news}</div>
            <div className='news_date'>{newsItem.data_news}</div>
        </div>
        <div className='news_description'>{newsItem.description_news}</div></div> ))}
        </div>
        </div>
    </div>
  );
};