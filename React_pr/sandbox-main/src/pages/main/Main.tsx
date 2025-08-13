import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import { news } from '../../helper/HelpNews';
import './Main.scss';



export type Premiere = {
  id:number;
  time_date:string;
  age:string;
  title:string;
  description:string;
  description2?:string;
  photo:string;
  time:string;
}

type News = {
  id:number;
  picture_news:string;
  title_news:string;
  date_news:string;
  description_news:string
}

export const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   const [cityFilter, setCityFilter] = useState('all');

   const[premieres, setPremieres] = useState<Premiere[]>([
      {
        id:1,
        time_date:'24 мая, 18:30',
        age:'14 +',
        title: 'Иваново детство',
        description: 'Иван — это ребёнок, снедаемый страстью взрослого. Он потерял детство на войне и погиб, потому что жил как взрослый. Картина должна строиться на характере мальчика, но должны быть эпизоды, где выясняются его детские черты. В рассказе найдена точная деталь — игра в войну — что может быть страшнее! Здесь все очень глубоко, страшно и правдиво, здесь нет места приключенческой романтике...',
        description2:' Иван видит сны. Ему снится та жизнь, которой он лишён, обыкновенное детство. В снах должно быть обыкновенное счастливое детство. В жизни — та страшная нелепость, которая происходит, когда ребёнок вынужден воевать.',
        photo:'ivan.jpg',
        time:"1 час 40 мин."
      },
      {
        id:2,
        time_date:'20 мая, 18:30',
        age:'16 +',
        title: 'Лиса и виноград',
        description: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
        description2:'',
        photo:'/Rectangle 141.png',
        time:"1 час 40 мин."
      },
      {
        id:3,
        time_date:'20 мая, 18:30',
        age:'16 +',
        title: 'Лиса и виноград',
        description: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
        description2:'',
        photo:'/Rectangle 141.png',
        time:"1 час 40 мин."
      },
      {
        id:4,
        time_date:'24 мая, 18:30',
        age:'14 +',
        title: 'Иваново детство',
        description: 'Иван — это ребёнок, снедаемый страстью взрослого. Он потерял детство на войне и погиб, потому что жил как взрослый. Картина должна строиться на характере мальчика, но должны быть эпизоды, где выясняются его детские черты. В рассказе найдена точная деталь — игра в войну — что может быть страшнее! Здесь все очень глубоко, страшно и правдиво, здесь нет места приключенческой романтике...',
        description2:' Иван видит сны. Ему снится та жизнь, которой он лишён, обыкновенное детство. В снах должно быть обыкновенное счастливое детство. В жизни — та страшная нелепость, которая происходит, когда ребёнок вынужден воевать.',
        photo:'ivan.jpg',
        time:"1 час 40 мин."
      }
    ]
   );

   const[news, setNews] = useState<News[]>([
    {
      id: 1,
      title_news:'24 мая - благотворительный показ спектакля «Иваново детство»',
      date_news:'12.05.21',
      description_news:'24 мая пройдет благотворительный показ спектакля “Иваново детство”. Все средства от реализации билетов будут семьям погибших в казанской гимназии №175',
      picture_news:'/news1.jpg'

    },
    {
      id: 2,
      title_news:'"Маленький принц" с сурдопереводом итифлокомментированием',
      date_news:'12.05.21',
      description_news:'29 мая в 18:00 пройдет очередной показ в рамках проекта "Театр без границ" Казанского ТЮЗа и фонда "День добрых дел". Тифлокомментированием и сурдопереводом будет оснащен "Маленький принц" - трогательная и мудрая история о дружбе и взрослении.',
      picture_news:'/news2.jpg'

    },
    {
      id: 3,
      title_news:'Вячеслав Казанцев - народный артист РТ!',
      date_news:'27.04.21',
      description_news:'Президент РТ Рустам Минниханов присвоил ему звание в Казанском Кремле.Сегодня Президент Республики Татарстан Рустам Минниханов вручил государственные награды Российской Федерации и Республики Татарстан.',
      picture_news:'/news3.jpg'

    },
    {
      id: 4,
      title_news:'Радион Букаев представит свой первый спектакль в Казанском ТЮЗе',
      date_news:'12.05.21',
      description_news:'Им станет постановка о 1970-1980 годах театра, приуроченная к 90-летнему юбилею ТЮЗа 26 марта в 18:30 в Казанском ТЮЗе пройдет премьера спектакля-пасьянса "Первый тайм". Его постановщиком выступил Радион Букаев, который с 2020 года является главным режиссером театра. ',
      picture_news:'/news4.jpg'

    },
    {
      id: 5,
      title_news:'24 мая - благотворительный показ спектакля «Иваново детство»',
      date_news:'12.05.21',
      description_news:'24 мая пройдет благотворительный показ спектакля “Иваново детство”. Все средства от реализации билетов будут семьям погибших в казанской гимназии №175',
      picture_news:'/news1.jpg'

    },
    {
      id: 6,
      title_news:'"Маленький принц" с сурдопереводом итифлокомментированием',
      date_news:'12.05.21',
      description_news:'Президент РТ Рустам Минниханов присвоил ему звание в Казанском Кремле.Сегодня Президент Республики Татарстан Рустам Минниханов вручил государственные награды Российской Федерации и Республики Татарстан.',
      picture_news:'/news2.jpg'

    },
    {
      id: 7,
      title_news:'Вячеслав Казанцев - народный артист РТ!',
      date_news:'27.04.21',
      description_news:'24 мая пройдет благотворительный показ спектакля “Иваново детство”. Все средства от реализации билетов будут семьям погибших в казанской гимназии №175',
      picture_news:'/news3.jpg'

    },
    {
      id: 8,
      title_news:'Радион Букаев представит свой первый спектакль в Казанском ТЮЗе',
      date_news:'12.05.21',
      description_news:'Им станет постановка о 1970-1980 годах театра, приуроченная к 90-летнему юбилею ТЮЗа 26 марта в 18:30 в Казанском ТЮЗе пройдет премьера спектакля-пасьянса "Первый тайм". Его постановщиком выступил Радион Букаев, который с 2020 года является главным режиссером театра. ',
      picture_news:'/news4.jpg'

    },
    {
      id: 9,
      title_news:'24 мая - благотворительный показ спектакля «Иваново детство»',
      date_news:'12.05.21',
      description_news:'24 мая пройдет благотворительный показ спектакля “Иваново детство”. Все средства от реализации билетов будут семьям погибших в казанской гимназии №175',
      picture_news:'/news1.jpg'

    },
    {
      id: 10,
      title_news:'"Маленький принц" с сурдопереводом итифлокомментированием',
      date_news:'12.05.21',
      description_news:'Президент РТ Рустам Минниханов присвоил ему звание в Казанском Кремле.Сегодня Президент Республики Татарстан Рустам Минниханов вручил государственные награды Российской Федерации и Республики Татарстан.',
      picture_news:'/news2.jpg'

    },
    {
      id: 11,
      title_news:'Вячеслав Казанцев - народный артист РТ!',
      date_news:'27.04.21',
      description_news:'24 мая пройдет благотворительный показ спектакля “Иваново детство”. Все средства от реализации билетов будут семьям погибших в казанской гимназии №175',
      picture_news:'/news3.jpg'

    },
    {
      id: 12,
      title_news:'Радион Букаев представит свой первый спектакль в Казанском ТЮЗе',
      date_news:'12.05.21',
      description_news:'Им станет постановка о 1970-1980 годах театра, приуроченная к 90-летнему юбилею ТЮЗа 26 марта в 18:30 в Казанском ТЮЗе пройдет премьера спектакля-пасьянса "Первый тайм". Его постановщиком выступил Радион Букаев, который с 2020 года является главным режиссером театра. ',
      picture_news:'/news4.jpg'

    },
  ])

   const [currentIndex, setCurrentIndex] = useState(0);

    // Проверка наличия данных перед рендерингом
  if (!premieres || premieres.length === 0) {
    return <div>Загрузка премьер...</div>;
  }

  if (!news || news.length === 0){
    return <div>Загрузка новостей...</div>;
  }

   const nextPremiere = () =>{
    setCurrentIndex((prevIndex) => 
    prevIndex === premieres.length - 1 ? 0:prevIndex+1);
   };

   const prevPremiere = () =>{
    setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? premieres.length - 1 : prevIndex-1 );
   };

   const getCardPremieres = () =>{
    if (premieres.length === 0) return [];
    const prev = currentIndex === 0 ? premieres.length-1 : currentIndex-1;
    const next = currentIndex === premieres.length-1 ? 0 : currentIndex+1;
    const nextNext = (currentIndex + 2) % premieres.length;

    return [
      premieres[prev],
      premieres[currentIndex],
      premieres[next],
      premieres[nextNext]
    ];
   };


  /*Что мы видим в итоге*/ 
  return (
    <div className='site_con'>
    <div className='main_con'>
      <div className='main_photo'>
      <img src='/theatre.jpg' alt='' className='photo_theatre'></img>
      {/*<h1 className='text_h1'>Казанский театр юного зрителя</h1>*/}
      <div className='text'>
        <h1 className='text_h1'>Казанский театр юного зрителя</h1>
      </div>
      </div>
    </div>
    <div className='main_con2'>
      <div className='description_con'>
        <div className='description_all'>
          <div className='description'>
            {/* Первая колонка */}
            <div className='column'>
              <p className='q'>Дата основания</p>
              <p className='e'>1932 год</p>
            </div>
            {/* Вторая колонка */}
            <div className='column'>
              <p className='q'>2020-2021 год</p>
              <p className='e'>32 спектакля</p>
            </div>
            {/* Третья колонка */}
            <div className='column'>
              <p className='q'>Абсолютно для всех</p>
              <p className='e'>0+</p>
            </div>
          </div>
        </div>
      <p className='description_button' onClick={() => navigate('/about')}>Узнать подробнее</p>
        </div>
     </div>
     <div className='main_con3'>
      <div className='main_card'>
        <h1 className='Premier_h1'>Ближайшие премьеры</h1>
      
        <div className='premier_con'>
          {getCardPremieres().map((premiere, index) =>(
            premiere &&(
            <div key={premiere.id}
            className={`premiere-card ${index === 1 ? 'active' : ''}`} >
              <img src={premiere.photo} alt="" className='card_img'></img>
              <div className='premier_date'>
                <div className='card_date'>
                <p className='c'>{premiere.time_date}</p>
                </div>
                <div className='card_age'>
                <p className='d'>{premiere.age}</p></div>
                </div>
                <h3 className='card_title' 
                  >{premiere.title}</h3>
                <p className='card_description'>{premiere.description}</p>
              </div>
              
            )
            
          ))}
        </div>
         <div className='back_front'>
          <div className='button'>
              <img 
                src='/Back.png' 
                alt='' 
                className='button_back' 
                onClick={prevPremiere}
              /></div>
              <div className='button'>
              <img 
                src='/Tofront.png' 
                alt='' 
                className='button_tofront' 
                onClick={nextPremiere}/></div>
            </div>
    
          </div>
          </div>

          <div className='main_con4'>
            <div className='buttons_4_con'>
              <div className='buttons_4'>
                <button className='buttons_vid1'>Правила поведения</button>
                <button className='buttons_vid2'>Панорама зала</button>
                <button className='buttons_vid3'>История театра</button>
                <button className='buttons_vid4'>Коллектив театра</button>
              </div>

            </div>
          </div>

          <div className='main_con5'>
            <div className='news_con'>
              <div className='text_more_news'>
              <h1 className='news_text'>Новости театра</h1>
              <p className='more_news' onClick={() => navigate('/news')}>Показать все ⟶ </p>
              </div>
              <div className='news_news'>
               

                
              </div>
            </div>
          </div>
      </div>
 
  )
  
};


