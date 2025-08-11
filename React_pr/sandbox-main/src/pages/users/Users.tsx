import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import './Users.scss';

type Premiere = {
  id:number;
  time_date:string;
  age:string;
  title:string;
  description:string;
  description2?:string;
  photo:string
}

export const Users = () => {
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
        description2:'Иван видит сны. Ему снится та жизнь, которой он лишён, обыкновенное детство. В снах должно быть обыкновенное счастливое детство. В жизни — та страшная нелепость, которая происходит, когда ребёнок вынужден воевать.',
        photo:'ivan.jpg'
      },
      {
        id:2,
        time_date:'20 мая, 18:30',
        age:'16 +',
        title: 'Лиса и виноград',
        description: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
        description2:'',
        photo:'/Rectangle 141.png'
      },
      {
        id:3,
        time_date:'20 мая, 18:30',
        age:'16 +',
        title: 'Лиса и виноград',
        description: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
        description2:'',
        photo:'/Rectangle 141.png'
      },
      {
        id:4,
        time_date:'24 мая, 18:30',
        age:'14 +',
        title: 'Иваново детство',
        description: 'Иван — это ребёнок, снедаемый страстью взрослого. Он потерял детство на войне и погиб, потому что жил как взрослый. Картина должна строиться на характере мальчика, но должны быть эпизоды, где выясняются его детские черты. В рассказе найдена точная деталь — игра в войну — что может быть страшнее! Здесь все очень глубоко, страшно и правдиво, здесь нет места приключенческой романтике...',
        description2:'Иван видит сны. Ему снится та жизнь, которой он лишён, обыкновенное детство. В снах должно быть обыкновенное счастливое детство. В жизни — та страшная нелепость, которая происходит, когда ребёнок вынужден воевать.',
        photo:'ivan.jpg'
      }
    ]
   );

   const [currentIndex, setCurrentIndex] = useState(0);

    // Проверка наличия данных перед рендерингом
  if (!premieres || premieres.length === 0) {
    return <div>Загрузка премьер...</div>;
  }

   const nextPremiere = () =>{
    setCurrentIndex((prevIndex) => 
    prevIndex === premieres.length - 1 ? 0:prevIndex+1);
   };

   const prevPremiere = () =>{
    setCurrentIndex((prevIndex) => 
    prevIndex === premieres.length - 1 ? 0: prevIndex-1 );
   };

   const getCardPremieres = () =>{
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
        <div className='back_tofront'>
        <img src='/Back.png' alt='' className='button_back'></img>
        <img src='/Tofront.png' alt='' className='button_tofront'></img>
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
      <p className='description_button'>Узнать подробнее</p>
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
                <h3 className='card_title'>{premiere.title}</h3>
                <p className='card_description'>{premiere.description}</p>
              </div>
            )
          ))}
          <div className='back_tofront'>
              <img 
                src='/Back.png' 
                alt='' 
                className='button_back' 
                onClick={prevPremiere}
              />
              <img 
                src='/Tofront.png' 
                alt='' 
                className='button_tofront' 
                onClick={nextPremiere}
              />
            </div>
        </div>
    
          </div>
          </div>
      </div>
 
  )
};

