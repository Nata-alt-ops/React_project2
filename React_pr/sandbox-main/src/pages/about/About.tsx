import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import './About.scss';



export const About = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   const [cityFilter, setCityFilter] = useState('all');
   const [activeTab, setActiveTab] = useState<'history' | 'tours'>('history');

 

      return (
        <div className='p'>
        <div className='about_con'>
            <div className='about_info_button'>
                <div className='about_info'>
                   {/* Первая колонка */}
                  <div className='column'>
                    <p className='t'>Население</p>
                    <p className='h'>405 чел</p>
                  </div>
                  {/* Вторая колонка */}
                  <div className='column'>
                    <p className='t'>Казань-Иннополис</p>
                    <p className='h'>1 ч.20 мин.</p>
                  </div>
                  {/* Третья колонка */}
                  <div className='column'>
                    <p className='t'>Казань-Иннополис</p>
                    <p className='h'>42 км.</p>
                  </div>
                </div>
                <div className='about_button'>
                    <p onClick={() => navigate('/main')}>Вернуться</p>
                </div>
            </div>
            
        </div>
        <div className='information_con'>
          <div className='info_con'>
            <div className='photo_city'>
                <div className='restangle'></div>
                <img src='' alt=''></img>
              </div>
              {/*<div className='change_button'>
                <button className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
                  onClick={() => setActiveTab('history')}>История города</button>
                  <button className={`tab-button ${activeTab === 'tours' ? 'active' : ''}`} onClick={() => setActiveTab('tours')}>Экскурсии по городу</button>
                </div>*/}
                
               
            </div>
            </div>
        
           
        </div>
      )}