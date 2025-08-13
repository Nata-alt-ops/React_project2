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
        {news.map((newsItem) => (
          <div key={newsItem.id} className='news_item' onClick={() => navigate(`/news/${newsItem.id}`)}>
        <div className='news_photo'>
            <img src={newsItem.photo} alt={newsItem.title_news}></img>
        </div>
        <div className='news_title_date'>
            <div className='news_title'>{newsItem.title_news}</div>
            <div className='news_date'>{newsItem.data_news}</div>
        </div>
        <div className='news_description'>{newsItem.description_news}</div></div> ))}
        </div>
    </div>
  );
};