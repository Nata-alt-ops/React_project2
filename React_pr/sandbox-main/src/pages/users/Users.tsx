import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import './Users.css';



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
  useEffect(() => {
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
  }, []);
    
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
    <div className='users_body'>
        <div className='users_con'>
           <div className='group'>
          <input id='search' type='text' placeholder="🔍Поиск" className='search'
           onChange={(e) => setSearchTerm(e.target.value)} />
           <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="city-filter"
          >
            <option value="all">Все города</option>
            {Array.from(new Set(users.map(u => u.address.city))).map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
           {/*Добавление нового пользователя*/}
          <button className='add_user' onClick={() => openModal()}>Добавить пользователя</button>
          </div>
          {/*Модальное окно и форма для заполнения*/}
          {/*Модальное окно*/}
           <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className={'modal_window'}
          overlayClassName="modal-overlay"
        >{/*Сама форма заполнения*/}
          <form onSubmit={handleSubmit(onSubmit)} className='modal-form'>
              <div className="form-group">

              
              <label className='label_text'>Введите данные о пользователе:</label>
              
               <div className='modal1'>
              <input placeholder='Имя пользователя'
                {...register("name", { required: "Обязательное поле" })}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name.message}</span>}
           
              <input placeholder='Никнейм'
                {...register("username", { required: "Обязательное поле" })}
                className={errors.username ? "error" : ""}
              />
       
              {errors.username && <span className="error-text">{errors.username.message}</span>}
              <input placeholder='Email'
                {...register("email")}/>
              </div> 
      
               <div className='label_address_geo'>
                <label className='address_label'>Адрес:</label>
                <label className='geo_label'>Геолокация:</label>
               </div>
              
              <div className='modal2'>
                <div className='modal2_group'>
              <input placeholder='Улица'
                {...register("address.street", { required: "Обязательное поле" })}
                className={errors.address?.street ? "error" : ""}/>
              {errors.address?.street && <span className="error-text">{errors.address.street.message}</span>}


              <input placeholder='Офис'
                {...register("address.suite", { required: "Обязательное поле" })}
                className={errors.address?.suite ? "error" : ""}/>
              {errors.address?.suite && <span className="error-text">{errors.address.suite.message}</span>}
              </div>
              <div className='modal2_group'>
              <input placeholder='Город'
                {...register("address.city", { required: "Обязательное поле" })}
                className={errors.address?.city ? "error" : ""}/>
              {errors.address?.city && <span className="error-text">{errors.address.city.message}</span>}


              <input placeholder='Зип-код'
                {...register("address.zipcode", { required: "Обязательное поле" })}
                className={errors.address?.zipcode ? "error" : ""}/>
              {errors.address?.zipcode && <span className="error-text">{errors.address.zipcode.message}</span>}
              </div>
                
               <div className='modal2_group'>
              <input placeholder='Широта'
                {...register("address.geo.lat", { required: "Обязательное поле" })}
                className={errors.address?.geo?.lat ? "error" : ""}/>
              {errors.address?.geo?.lat  && <span className="error-text">{errors.address.geo.lat.message}</span>}


              <input placeholder='Долгота'
                {...register("address.geo.lng", { required: "Обязательное поле" })}
                className={errors.address?.geo?.lat ? "error" : ""}/>
              {errors.address?.geo?.lng  && <span className="error-text">{errors.address.geo.lng.message}</span>}
              </div>
                </div>
      
                 <div className='modal3'>
                  <label className='label_phone'>Контакты:</label>
              <input placeholder='Телефон'
                {...register("phone", { required: "Обязательное поле" })}
                className={errors.phone ? "error" : ""}/>
              {errors.phone  && <span className="error-text">{errors.phone.message}</span>}


              <input placeholder='Веб-сайт'
                {...register("website", { required: "Обязательное поле" })}
                className={errors.website ? "error" : ""}/>
              {errors.website  && <span className="error-text">{errors.website.message}</span>}
            </div>
              <div className='modal3'>
              <label className='company_label'>Информация о компании</label>
              <input placeholder='Название компании'
                {...register("company.name", { required: "Обязательное поле" })}
                className={errors.company?.name ? "error" : ""}/>
              {errors.company?.name && <span className="error-text">{errors.company.name.message}</span>}


              <input placeholder='Коронная фраза'
                {...register("company.catchPhrase" , { required: "Обязательное поле" })}
                 className={errors.company?.catchPhrase ? "error" : ""}/>
                 {errors.company?.catchPhrase && <span className="error-text">{errors.company.catchPhrase.message}</span>}
        


               <input placeholder='Бизнес стратегия'
                {...register("company.bs", { required: "Обязательное поле" })}
                className={errors.company?.bs ? "error" : ""}/>
                {errors.company?.bs && <span className="error-text">{errors.company.bs.message}</span>}
        </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">Добавить пользователя</button>
              <button type="button" onClick={closeModal} className="cancel-btn">Отмена</button>
            </div>
          </form>
        </Modal>  

          <div className='table_con'>
          <table className='users_table'>
            <thead className='table_head'>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>address</th>
              <th>phone</th>
              <th>website</th>
              <th>company</th>
              <th className='actions'>Actions</th>
            </tr>
            </thead>
            <tbody>
              {/*Перебор массива пользователей*/}
              {searchCity.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className='name_text'>
                        <div className='name_info'>
                            <p className='name_text'><strong>{user.name}</strong></p>
                        </div>
                    </div> 
                  </td>
                  <td className='username_text'>{user.username}</td>
                  <td className='email_text'>{user.email}</td>
                  <td className='address_text' >
                    <div className='address_street'><p>Улица: {user.address.street}</p></div>
                    <div className='address_suite'><p>Номер Офиса: {user.address.suite}</p></div>
                    <div className='address_city'><p>Город: {user.address.city}</p></div>
                    <div className='address_zipcode'><p>Зип-код: {user.address.zipcode}</p></div>
                    <label className='label_geo'>Координаты:</label>
                    <div className='address_geo_lat'><p>Широта: {user.address.geo.lat}</p></div>
                    <div className='address_geo_lng'><p>Долгота: {user.address.geo.lng}</p></div>
                  </td>
                  <td className='phone_text'>{user.phone}</td>
                  <td className='website_text'>{user.website}</td>
                  <td className='company_text'>
                    <div className='company_name'><p>Название компании: {user.company.name}</p></div>
                    <div className='company_catchPhrase'><p>Коронная фраза: {user.company.catchPhrase}</p></div>
                    <div className='company_bs'><p>Бизнес стратегия: {user.company.bs}</p></div>
                  </td>
                   <td className='actions_text'>
                    <div className='actions_icon'>
                        <span onClick={() => openModal(user)}><img src='/Cell Action Button.png' className='icon_1' alt=''></img></span>
                        <span onClick={() => DeleteUsers(user.id)}><img src='/Cell Action Button (1).png' className='icon_2' alt='' /></span>
                    </div>
                    </td>

                </tr>
                ))}
            </tbody>
          </table>
          </div>

       </div>
    </div>
  )
};

