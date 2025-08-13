// src/pages/NewsDetail/NewsDetail.tsx
import { useParams } from 'react-router-dom';
import { news } from '../../helper/HelpNews';
import './ShowNews.scss'

export const ShowNews = () => {
  const { id } = useParams();
  const newsItem = news.find(item => item.id === Number(id));

  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }

  // Функция для автоматического разделения текста на абзацы
  const createParagraphs = (text: string) => {
    // 1. Разделяем по комбинации точки и заглавной буквы
    const sentences = text.split(/(?<=\.)\s+(?=[А-Я])/);
    
    // 2. Группируем предложения в абзацы по 2-3 предложения
    const paragraphs = [];
    let currentParagraph = [];
    
    for (let i = 0; i < sentences.length; i++) {
      currentParagraph.push(sentences[i]);
      
      // Создаем новый абзац после каждых 2-3 предложений
      if (currentParagraph.length >= 2 || i === sentences.length - 1) {
        paragraphs.push(currentParagraph.join(' '));
        currentParagraph = [];
      }
    }
    
    return paragraphs;
  };

  const paragraphs = createParagraphs(newsItem.description_news);

  return (
    <div className="news-detail">
    <div className='con1'>
        <div className='con_photo'>
            <img src={newsItem.photo} alt={newsItem.title_news} className='photo_news'></img>
        </div>
    </div>
    <div className='con2'>
        <div className='con_date_title'>
            <p className='data_text'>{newsItem.data_news}</p>
            <p className='title_text'>{newsItem.title_news}</p>
        </div>  
    </div>
    <div className='con3'>
        <div className='con_description'>
               {paragraphs.map((paragraph, index) => (
        <p key={index} className="description_text">
          {paragraph}
        </p>
      ))}
            
        </div>  
    </div>






    
    



    </div>
  );
};