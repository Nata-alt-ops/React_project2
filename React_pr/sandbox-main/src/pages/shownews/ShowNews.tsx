// src/pages/NewsDetail/NewsDetail.tsx
import { useParams } from 'react-router-dom';
import { news } from '../../helper/HelpNews';

export const ShowNews = () => {
  const { id } = useParams();
  const newsItem = news.find(item => item.id === Number(id));

  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }

  return (
    <div className="news-detail">
    <div className='con'>
        <div className='con_photo'>
            <img src={newsItem.photo} alt={newsItem.title_news} className='photo_news'></img>
        </div>
    </div>






    <div className="news-detail">
      <h1>{newsItem.title_news}</h1>
      <p className="date">{newsItem.data_news}</p>
      <img src={newsItem.photo} alt={newsItem.title_news} />
      <div className="full-text">
        {newsItem.description_news}
      </div>
    </div>



    </div>
  );
};