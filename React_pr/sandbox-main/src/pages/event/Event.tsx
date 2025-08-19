// src/pages/Event/Event.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { premiere} from '../../helper/HelpPremiere'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Event.scss';
export const Event = () => {
  const [activeTab, setActiveTab] = useState<'About_the_performance' | 'Group'>('About_the_performance');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Добавьте в начало компонента
const [imageStyle, setImageStyle] = useState({});
// Находим премьеру по ID
const premiereInfo = premiere.find((item) => item.id === Number(id));


if (!premiereInfo) {
  return <div className="event-page">Премьера не найдена</div>;
}
  return (
    <div className="event-page">
      <div className='con'>
        <div className='con_event'>
          <div className='event_photo'>
            <img src={premiereInfo?.photo} alt={premiereInfo?.title_premiere} className='event_img'  style={imageStyle} />
            <div className='date_overlay_mobile'>
              <div className='colum'>
              <p className='event_time'>Длительность</p>
              <p className='text_time_age'>{premiereInfo.time}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='con_event_info'>
          <div className='event_info'>

            <div className='info'>
            <div className='colum'>
              <h1>{premiereInfo.title_premiere}</h1>
              <h3>драма в одном действии</h3>
            </div>
            <div className='p'>
            <div className='colum'>
              <p className='event_time'>Длительность</p>
              <p className='text_time_age'>{premiereInfo.time}</p>
            </div>
            <div className='colum'>
              <p className='event_time'>Ограничение</p>
              <p className='text_time_age'>{premiereInfo.age}</p>
            </div>
            </div>
            </div>

            <div className='event_button'>
              <button onClick={() => navigate(`/buy_ticket/${premiereInfo.id}`)}>Купить билет</button>
            </div>
          </div>
        </div>

        <div className='info_change'>
          <div className='button_infor'>
            <div className={`tab_buttons ${activeTab === 'About_the_performance' ? 'About_the_performance_active' : 'Group_active'}`}>
              <button 
                className={activeTab === 'About_the_performance' ? 'active' : ''}
                onClick={() => setActiveTab('About_the_performance')}
              >
                О спектакле
              </button>
              <button 
                className={activeTab === 'Group' ? 'active' : ''}
                onClick={() => setActiveTab('Group')}
              >
                Коллектив
              </button>
            </div>
            
            {activeTab === 'About_the_performance' ? (
            <div className="text_change">
              <p className="premiere-date">Премьера состоялась {premiereInfo.data_news} года.</p>
              <p className="description-short">{premiereInfo.description_premiere}</p>
                <div className="description-long">
                  {premiereInfo.description2.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text_change">
                <p>Очень дружный коллектив</p>
              </div>
            )}
          </div>


        </div>
        
      
    
    </div>
  );
};