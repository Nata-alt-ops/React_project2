import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import './News.css';
type NewsItem = {
  id: number;
  title: string;
  description: string;
  category:string;
  read: number;
  photo:string;
};

type FormData = {
  id: number;
  title: string;
  description: string;
  category:string;
  read: number;
  photo:string;
};

export const News = () =>{
    const[searchTerm, setSearchTerm] = useState('');
    const[editnews, setEditNews] = useState<NewsItem | null>(null);
    const[news, setNews] = useState(
        [{
        id: 1,
        title: 'Long March 9 Rocket Will Be a Game-changer for China’s Space Program',
        description: 'SpaceX’s Starship spacecraft and super heavy rocket – the gleaming stainless steel rocket envisioned as a “fully reusable transportation system” – dominates the global news landscape. Starship has a lift capacity of 150 metric tonnes to low earth orbit (LEO) in its reusable version, and 250 metric tonnes in its expendable version.',
        category:'Space and Universe ',
        read: 7,
        photo:'/Frame 1.png'
        
    },
    {
        id: 2,
        title: 'A Day in the Life of an Astronaut: Humanity’s Open Window to Space',
        description: 'Astronauts frequently use the definition of freedom related to space, yet their experiences not only give them a sense of being a speck in the universe but also offer the opportunity to witness breathtaking views.Astronauts who experience this actually live in a small space within a spacecraft or the International Space Station (ISS). ',
        category:'Space and Universe',
        read: 4 ,
        photo:'/astronaut1.jpg'
    },
    {
        id: 3,
        title: 'Q&A: Life Exists Outside of Earth With Astronaut Matthias Maurer | Euronews Tech Talks Podcast',
        description: 'In this episode, we conclude our three-part series investigating the impact of space technology on humanity with a Q&A featuring ESA astronaut Matthias Maurer about life beyond planet Earth.',
     
        category:'Space and Universe',
        read: 5,
        photo:'/astronaut2.jpg'
    },
    {
        id: 4,
        title: 'Gaganyaan: India Launches Test Flight Ahead of Sending Crew Into space',
        description: "India's space agency has carried out the first in a series of tests flights ahead of its planned mission to take astronauts into space in 2025.The Gaganyaan spacecraft was launched at 10:00 local time (04:30GMT) on Saturday from Sriharikota.",
       
        category:'Space and Universe',
        read: 6,
        photo:'/rocket2.jpg'
    },
    {
        id: 5,
        title: 'Astronomers Link “Starquakes” to Mysterious Radio Signals From Space',
        description: 'Fast radio bursts (FRBs), intense radio energy bursts, are a perplexing astronomical enigma. The University of Tokyo’s recent research has found similarities between FRBs and earthquakes',
        category:'Space and Universe',
        read: 6,
        photo:'/satellite_dish.jpg'
    },
    {
        id: 6,
        title: 'NASA to Equip International Space Station With Frikkin Lasers (for comms)',
        description: 'US space agency NASA plans to run a technology demonstration for space lasers using the International Space Station next month, to test how th',
    
        category:'Space and Universe',
        read: 3,
        photo:'/satellite.jpg'
    },
    {
        id: 7,
        title: 'Off-Duty Pilot Accused of Trying to Cut the Engines on an Alaska Airlines Flight',
        description: 'The flight was diverted to Portland, Ore., because of a “credible security threat” inside the cockpit, the airline said. An off-duty pilot was charged with attempted murder.',
       
        category:'Technology',
        read: 4,
        photo:'/plane.jpg'
    },
    {
        id: 8,
        title: "Sayonara! End of the Line for ASIMO, Japan's Famed Robot?",
        description: "It has played football with former US president Barack Obama and danced for German leader Angela Merkel, but Honda's ASIMO robot may have reached the end of the line.This article was published in thejakartapost.com with the title End of the line for ASIMO, Japan's famed robot?. Click to read: https://www.thejakartapost.com/life/2018/06/28/end-of-the-line-for-asimo-japans-famed-robot.html.Download The Jakarta Post app for easier and faster news access:Android: http://bit.ly/tjp-androidiOS: http://bit.ly/tjp-ios'",

        category:'Technology',
        read: 5,
        photo:'/robot.jpg'
    },
    {
        id: 9,
        title: 'Conditions on Earth May be Moving Outside the ‘Safe Operating space’ for humanity, according to dozens of scientists',
        description: 'Human actions have pushed the world into the danger zone on several key indicators of planetary health, threatening to trigger dramatic changes in conditions on Earth, according to a new analysis from 29 scientists in eight countries.',
        category:'Our Planet',
        read: 6,
        photo:'/Earth.jpg'
    },
    {
        id: 10,
        title: 'Spain’s Renfe Sets July Date for New High-Speed Trains to France',
        description: 'Lorem ipsum dolor sit amet consectetur. At tellus nulla arcu sollicitudin nulla elit senectus. Sit in nulla hendrerit diam nunc maecenas viverra molestie euismod.',
      
        category:'Technology',
        read: 8,
        photo:'/train.jpg'
    },
    {
        id: 11,
        title: 'Axiom Space refines training for next private astronaut mission',
        description: 'Travelers will have a new option between Barcelona and Lyon, and Madrid and Marseille come July. That’s when Spain’s rail operator, Renfe,',
        
        category:'Space and Universe',
        read: 9,
        photo:'/rocket3.jpg'
    },
    {
        id: 12,
        title: "Beyond the Colosseum: Eight Sites that Reveal Rome's Hidden History",
        description: 'Currently trending is the surprising notion that many men think frequently about the Roman Empire – something that speaks to the enduring appeal of an empire that thrived some 2,000 years ago. And there are few cities better for exploring its legacy than the city of Rome, the caput mundi of the Roman Empire itself.',
       
        category:'Our Planet',
        read: 11,
        photo:'/The_Colosseum.jpg'
    },
    {
        id: 13,
        title: 'What Is The Importance Of Family In Modern Society?',
        description: 'With advancements in technology, changing cultural norms, new priorities, and advanced forms of communication fueled by the internet, you may wonder how family holds up in modern society.',

        category:'Health and Science ',
        read: 6,
        photo:'/family.jpg'
    },
    {
        id: 14,
        title: 'Some of the Last Giant Pandas in the US are Leaving Next Month. But the National Zoo is betting $1.7 million the bears will be back.',
        description: 'Some of the last giant pandas in the US are leaving next month. But the National Zoo is betting $1.7 million the bears will be back.',
    
        category:'Our Planet',
        read: 4,
        photo:'/panda.jpg'
    },
    {
        id: 15,
        title: 'Public Input Sought on State Forest Work Plan Update',
        description: 'The Maryland Department of Natural Resources is seeking public comment on an additional silvicultural operation proposed as an inclusion to th',
    
        category:'Our Planet',
        read: 3,
        photo:'/forest.jpg'
    },
    {
        id: 16,
        title: "Air pollution: Delhi Air Turns Very Poor but 'Worst is Yet to Com",
        description: "The air quality in India's capital Delhi has fallen to poor levels and is expected to deteriorate further in the coming days, officials have said.Delhi is one of the world's most polluted cities through the year.",
        category:'Our Planet',
        read: 7,
        photo:'/peoples.jpg'
    },

    ]);
    const filteredNews = news.filter(newsitem => 
        newsitem.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        newsitem.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        newsitem.category.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) 
     
    );
    /*Удаление новости*/ 
    const DeleteNews =(id:number) =>{
        if (window.confirm('Вы точно хотите удалить новость?')) {
        setNews(nNews => nNews.filter(news => news.id !== id));

        }
    };
    /*Первоначальное состояние модального окна - закрыто */
    /*register — связывает поля ввода с формой (аналог name и onChange в ручном управлении).
    handleSubmit — обрабатывает отправку формы.
    reset — сбрасывает значения формы.
    errors — содержит ошибки валидации.*/ 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {register, handleSubmit, reset, formState:{ errors }} = useForm<FormData>();
    /*Открытие окна*/
    const openModal = (newsToEdit: NewsItem | null = null) => {setIsModalOpen(true);
        if (newsToEdit){
            setEditNews(newsToEdit);
            reset(newsToEdit);
        }else {
            setEditNews(null);
            reset();
        } };

    /*Закрытие окна и сброс формы*/
    const closeModal = () =>{
        setIsModalOpen(false);
        reset();
    };
    /*Отправление формы*/
    const onSubmit = (data: FormData) => {
        if (editnews) {
            setNews(news.map(item => item.id === editnews.id ? {...data, id: editnews.id}:
                item));
        }else{
        const newNews: NewsItem = {
            ...data,
            id: news.length +1,
            photo: data.photo || '/Frame 1.png',
        };
        setNews([...news, newNews]);
    };
        closeModal();
    };


  return (
   <div className='news_body'>
        <div className='news_con'>
            <h1 className='e'>Новости</h1>
            <div className='r'>
            <input id='search_news' type='text' placeholder='🔍Поиск' className='search_news'
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="news_add_user" onClick={() => openModal()}>Создать новость</button>
            </div>
            
            
            
            <div className='news_table'>
                
                     {filteredNews.map(newsitem =>(
                    <div key={newsitem.id} className='news-card'>
                        <img src={newsitem.photo} alt='' className='news_img'></img>
                        <h1 className='news-title'>{newsitem.title}</h1>
                        <p className='news-description'>{newsitem.description}</p>
                        <p className='news-source'>{newsitem.category} | {newsitem.read} min read</p>
                        <div className='actions_icons'>
                        <span onClick={() => openModal(newsitem)}><img src='/Cell Action Button.png' className='icon_1' alt=''></img></span>
                        <span onClick={() => DeleteNews(newsitem.id)}><img src='/Cell Action Button (1).png' className='icon_2' alt='' /></span>
                    </div>
                    </div>
                ))}
        
               
            </div>
            
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} className={'modal_window'} overlayClassName={'modal-overlay'} >
            <form onSubmit={handleSubmit(onSubmit)} className='modal'>
                <div className='form-group-label'>
                    <label className='label_title'>Создать Новость:</label>
                    <input placeholder='Заголовок' {...register('title', { required: "Обязательное поле"})}
                    className={errors.title ? 'error': ""} />
                    {errors.title && <span className="error-text">{errors.title.message}</span>}

                    
                    <textarea placeholder='описание' {...register('description', {required: "Обязательно поле"})} />
                     {errors.description && <span className="error-text">{errors.description.message}</span>}

                    
                    <select  {...register("category", {required: "Выберете категорию"})}
                    className={errors.category ? 'error' : ''} >
                    <option value={""}>Выберете категорию</option>
                    <option value="Space and Universe">Space and Universe</option>
                    <option value="Technology">Technology</option>
                    <option value="Our Planet">Our Planet</option>
                    <option value="Health and Science">Health and Science</option>
                    </select>
                     {errors.category && <span className="error-text">{errors.category.message}</span>}

                    
                     <input placeholder='время чтения (в минутах)'
                     type='number'
                     min={'1'}
                     max={'60'}
                     {...register("read", {
                        required:"Укажите время чтения",
                        min: { value: 1, message: "Минимум 1 минута"},
                        max: { value:60, message: "Максимум 60 минут" }
                     })}
                     className={errors.read ? 'error' : ''} />
                     {errors.read && <span className="error-text">{errors.read.message}</span>}
                    
                     <input 
                     type='text'
                     placeholder='Фото статьи (необязательно)'
                     {...register('photo')} />
                    <button type="submit" className='modal-button'>Добавить новость</button>
                </div>
                
            </form>
            </Modal>
            </div>
            </div>
        

  );
};