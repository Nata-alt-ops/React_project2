// src/pages/Event/Event.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { premiere} from '../../helper/HelpPremiere'; 
import './Event.scss';
export const Event = () => {
  const { id } = useParams<{ id: string }>();
  
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
            <img src={premiereInfo?.photo} alt={premiereInfo?.title_premiere} className='event_img' />
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
              <button>Купить билет</button>
            </div>
          </div>
        </div>
         {/*<div className='button_info'>
            <div className={`tab-buttons ${activeTab === 'history' ? 'history-active' : 'tours-active'}`}>
              <button 
                className={activeTab === 'history' ? 'active' : ''}
                onClick={() => setActiveTab('history')}
              >
                История города
              </button>
              <button 
                className={activeTab === 'tours' ? 'active' : ''}
                onClick={() => setActiveTab('tours')}
              >
                Экскурсии по городу
              </button>
            </div>
            
            {activeTab === 'history' ? (
              <div className="history_tours_text">
                <p>Иннополис находится в Верхнеуслонском районе Республики Татарстан в месте слияния двух рек — Волги и Свияги. Это первый российский город для ИТ-специалистов.</p>
                <p>Концепция &laquo;Умный город&raquo; помогает Иннополису организовать инфраструктуру, бизнес, образование, городские услуги и быт жителей Иннополиса так, чтобы жить в ИТ-городе было комфортно. Премьер-министр Российской Федерации Дмитрий Медведев вместе с Президентом Республики Татарстан Рустамом Миннихановым и министром связи и массовых коммуникаций РФ Николаем Никифоровым заложили капсулу с посланием будущим жителям на стартовой площадке строительства города. Через три года, 9 июня 2015 года, был дан официальный старт жизни нового города.</p>
                <p>Разработкой мастер-плана Иннополиса руководил Лиу Тай Кер, генеральный планировщик департамента по перепланировке Сингапура — эталона для большинства современных городов мира.</p>
                <p>Премьер-министр России Дмитрий Медведев, министр связи и массовых коммуникаций РФ Николай Никифоров, врио президента Татарстана Рустам Минниханов нажали символическую кнопку запуска нового города.</p>
                <p>В первый день рождения города Иннополис прошли конференции &laquo;Цифровая индустрия промышленной России&raquo; и РИФ.Иннополис, которые собрали более 5 тысяч гостей.</p>
                <p>В Иннополисе ежедневно находятся более 3800 человек. Зарегистрировано 367 компаний, из них 126 — резиденты и партнеры ОЭЗ &laquo;Иннополис&raquo;. Сдано в аренду более 88 тысяч квадратных метров недвижимости. Запущена вся базовая инфраструктура: 22 жилых дома, детский сад, школа, ИТ-лицей, медицинский и спортивный центры, работают отделения почты и банков, 3 супермаркета, пиццерия, кафе, бар, автомойка, аптеки, книжный и цветочный магазины, хобби-центр и другие сервисные компании.</p>
              </div>
            ) : (
              <div className="history_tours_text">
                <p>Экскурсии по Иннополису включают посещение университета, ИТ-парка, жилых кварталов и центра города. Вы сможете увидеть, как живут и работают ИТ-специалисты будущего.</p>
              </div>
            )}
          </div>*/}
      
    
    </div>
  );
};