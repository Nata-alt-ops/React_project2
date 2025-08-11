import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import './Users.scss';



type User= {
  id:number;
  name:string;
  username:string;
  email:string;
  address:{
      street:string;
      suite:string;
      city:string;
      zipcode:string;
      geo:{
        lat:string;
        lng:string
      }
  };
  phone:string;
  website:string;
  company:{
    name:string;
    catchPhrase:string;
    bs:string;
  }
};
type FormData = {
  name:string;
  username:string;
  email:string;
  address:{
      street:string;
      suite:string;
      city:string;
      zipcode:string;
      geo:{
        lat:string;
        lng:string
      }
  };
  phone:string;
  website:string;
  company:{
    name:string;
    catchPhrase:string;
    bs:string;
  }
}

export const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   const [users, setUsers] = useState<User[]>([]);
   const[edituser, setEditUser] = useState<User | null>(null);
   const [cityFilter, setCityFilter] = useState('all');

  // Загрузка данных
  /*useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки');
        }
        return response.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);*/
    
  /*Первоначальное состояние модального окна - закрыто*/
  const[ isModalOpen, setIsModalOpen] = useState(false);
  /*register — связывает поля ввода с формой (аналог name и onChange в ручном управлении).
    handleSubmit — обрабатывает отправку формы.
    reset — сбрасывает значения формы.
    errors — содержит ошибки валидации.*/ 
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const openModal = (userToEdit: User | null = null) => {setIsModalOpen(true);
    if (userToEdit){
      setEditUser(userToEdit);
      reset(userToEdit);
    } else{
      setEditUser(null);
      reset();
    }};
  const closeModal = () => {
    setIsModalOpen(false);
    reset(); // Сброс формы
  };
 /*Отправка формы*/
  const onSubmit = (data: FormData) => {
    if (edituser){
      setUsers(users.map(item =>item.id === edituser.id ? {...data, id: edituser.id}:
      item));
    } else{
    const newUser: User = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) +1:1,
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.address.street,
        suite:data.address.suite,
        city:data.address.city,
        zipcode:data.address.zipcode,
        geo:{
        lat:data.address.geo.lat,
        lng:data.address.geo.lng,
      }},
      phone:data.phone,
      website:data.website,
      company:{
        name:data.company.name,
        catchPhrase:'',
        bs:""}
  };
    setUsers([...users, newUser]);
};
    closeModal();
  };
  
  /*Удаление пользователей
  window.confirm - показывает окно с надписью и кнопками 
  120 строка - создание нового массива, без удаленного пользователя*/ 
  const DeleteUsers = (id:number) =>{
  if (window.confirm('Вы точно хотите удалить этого пользователя?')) {
    setUsers(nUsers => nUsers.filter(user => user.id !== id));
  }
  };
    /*Для поисковой строки - осуществляет поиск по ввсем столбцам таблицы*/ 
    const Users = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||

        user.address.street.toLowerCase().includes(searchTerm.toLowerCase())||
        user.address.suite.toLowerCase().includes(searchTerm.toLowerCase())||
        user.address.city.toLowerCase().includes(searchTerm.toLowerCase())||
        user.address.zipcode.toLowerCase().includes(searchTerm.toLowerCase())||
        user.address.geo.lat.toLowerCase().includes(searchTerm.toLowerCase())||
        user.address.geo.lng.toLowerCase().includes(searchTerm.toLowerCase())||

        user.phone.toLowerCase().includes(searchTerm.toLowerCase())||
        user.website.toLowerCase().includes(searchTerm.toLowerCase())||

        user.company.name.toLowerCase().includes(searchTerm.toLowerCase())||
        user.company.catchPhrase.toLowerCase().includes(searchTerm.toLowerCase())||
        user.company.bs.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const searchCity = cityFilter === 'all' ? Users : Users.filter(user => user.address.city === cityFilter);

    if (loading) return <div className='Loading'>Loading...</div>;
  if (error) return <div className='Error' >Error: {error}</div>;

  /*Что мы видим в итоге*/ 
  return (
    <div className='main_con'>
      <div className='main_photo'>
      <img src='/theatre.jpg' alt='' className='photo_theatre'></img>
     
       <h1 className='text_h1'>Казанский театр юного зрителя</h1>
        <div className='back_tofront'>
        <img src='/Back.png' alt='' className='button_back'></img>
        <img src='/Tofront.png' alt='' className='button_tofront'></img>
      </div>
       </div>
    </div>
    
  )
};

