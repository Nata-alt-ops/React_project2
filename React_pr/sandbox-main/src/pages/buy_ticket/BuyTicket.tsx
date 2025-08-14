import React from "react";
import { useParams } from "react-router-dom";
import { premiere } from "../../helper/HelpPremiere";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BuyTicket.scss';

export const ByuTicket = () =>{
    const [imageStyle, setImageStyle] = useState({});
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const premiereInfo = premiere.find((item) => item.id === Number(id));
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const performanceDates = premiereInfo?.performances || [];
    
    
    if (!premiereInfo) {
      return <div className="event-page">Премьера не найдена</div>;
    }

    return(
        <div className="on_buy_ticket_page">
      <div className='con_ticket'>
        <div className='con_buy_ticket'>
          <div className='buy_ticket_photo'>
            <img src={premiereInfo?.photo} alt={premiereInfo?.title_premiere} className='buy_ticket_img'  style={imageStyle} />
          </div>
        </div>
      </div>

      <div className="buy_ticket">
        <div className="buy_ticket_item">
            <div className="item">
                <h1>Покупка билета</h1>
                <div className="price">
                <p className="price_text">{premiereInfo.price} рублей</p>
                </div>
            </div>
        </div>
      </div>
      <div className="con_ticket2">
        <div className="ticket_description">
            <div className="description_button">
                <div className="choose_date">
                    <p>Выберете дату показа премьеры</p>
                </div>
                <div className="choose_button">
                 {performanceDates.map((date) => (
                <button key={date} className={`date-btn ${selectedDate === date ? 'active' : ''}`}
                onClick={() => setSelectedDate(date)}>
                {date}</button>))}
                </div>
                <div className="description">
                    <p>Внимание! Выбранные вами билеты должны быть оплачены банковской картой в течение 30 минут. Обязательно распечатайте приобретенный вами электронный билет. Его необходимо предъявить при входе в театр. </p>
                </div>
                <button>Оплатить билет</button>
                <button>Отменить</button>
            </div>
        </div>
      </div>
      
        
      
    
    </div>
    );
}