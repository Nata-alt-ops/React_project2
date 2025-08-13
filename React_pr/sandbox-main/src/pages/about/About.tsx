import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.scss';

export const About = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'history' | 'tours'>('history');

  const HistoryContent = () => (
    <div className='history_tours_text'>
      <p>Иннополис находится в Верхнеуслонском районе Республики Татарстан в месте слияния двух рек — Волги и Свияги. Это первый российский город для ИТ-специалистов.</p>
      <p>Концепция «Умный город» помогает Иннополису организовать инфраструктуру, бизнес, образование, городские услуги и быт жителей Иннополиса так, чтобы жить в ИТ-городе было комфортно. Премьер-министр Российской Федерации Дмитрий Медведев вместе с Президентом Республики Татарстан Рустамом Миннихановым и министром связи и массовых коммуникаций РФ Николаем Никифоровым заложили капсулу с посланием будущим жителям на стартовой площадке строительства города. Через три года, 9 июня 2015 года, был дан официальный старт жизни нового города.</p>
      <p>Разработкой мастер-плана Иннополиса руководил Лиу Тай Кер, генеральный планировщик департамента по перепланировке Сингапура — эталона для большинства современных городов мира.</p>
      <p>Премьер-министр России Дмитрий Медведев, министр связи и массовых коммуникаций РФ Николай Никифоров, врио президента Татарстана Рустам Минниханов нажали символическую кнопку запуска нового города.</p>
      <p>В первый день рождения города Иннополис прошли конференции «Цифровая индустрия промышленной России» и РИФ.Иннополис, которые собрали более 5 тысяч гостей.</p>
      <p>В Иннополисе ежедневно находятся более 3800 человек. Зарегистрировано 367 компаний, из них 126 — резиденты и партнеры ОЭЗ «Иннополис». Сдано в аренду более 88 тысяч квадратных метров недвижимости. Запущена вся базовая инфраструктура: 22 жилых дома, детский сад, школа, ИТ-лицей, медицинский и спортивный центры, работают отделения почты и банков, 3 супермаркета, пиццерия, кафе, бар, автомойка, аптеки, книжный и цветочный магазины, хобби-центр и другие сервисные компании.</p>

    </div>
  );

  const ToursContent = () => (
    <div className='history_tours_text'>
      <p>Экскурсии по Иннополису включают посещение университета...</p>
      {/* Остальной текст экскурсий */}
    </div>
  );

    return (
    <div className='p'>
      <div className='about_con'>
        <div className='about_info_button'>
          <div className='about_info'>
            <div className='column'>
              <p className='t'>Население</p>
              <p className='h'>405 чел</p>
            </div>
            <div className='column'>
              <p className='t'>Казань-Иннополис</p>
              <p className='h'>1 ч.20 мин.</p>
            </div>
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
            <img src='/city.jpg' alt='Город Иннополис' className='city_img' />
          </div>
          <div className='button_info'>
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
            {activeTab === 'history' ? <HistoryContent /> : <ToursContent />}
          </div>
        </div>
      </div>
    </div>
  );
}