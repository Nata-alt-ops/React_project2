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

    const [selectedSeats, setSelectedSeats] = useState<{row:number; seat:number}[]>([]);

    const handleSeatSelect = (row: number, seat: number) => {
    setSelectedSeats(prev => {
        const existing = prev.find(s => s.row === row && s.seat === seat);
        return existing 
            ? prev.filter(s => !(s.row === row && s.seat === seat))
            : [...prev, {row, seat}];
    });
};

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
              <div className="colum">
                <div className="choose_date">
                    <p>Выберете дату показа премьеры</p>
                </div>
                <div className="choose_button">
                 {performanceDates.map((date) => (
                <button key={date} className={`button ${selectedDate === date ? 'active' : ''}`}
                onClick={() => setSelectedDate(date)}>
                {date}</button>))}
                </div>
                <div className="description">
                    <p>Внимание! Выбранные вами билеты должны быть оплачены банковской картой в течение 30 минут. Обязательно распечатайте приобретенный вами электронный билет. Его необходимо предъявить при входе в театр. </p>
                </div>
                <div className="buy_cancel_buttons">
                <button className="buy_button">Оплатить билет</button>
                <button className="cancel_button">Отменить</button>
                </div>
                </div>
                <div className="colum">
                  <p className="scheme_text">Схема зала</p>
                  <div className="the_layout_of_the_hall">
                    {[...Array(14)].map((_, rowIndex) => {
                      const rowNumber = rowIndex+1;
                      let seatCount;
            
                      if (rowNumber<=1){
                        seatCount = 15;
                      } else if (rowNumber <=2){
                        seatCount = 17;
                      } else if (rowNumber <=7){
                        seatCount = 19;
                      } else if (rowNumber <=10){
                        seatCount = 20;
                      } else if (rowNumber <=12){
                        seatCount = 21;
                      }else if (rowNumber ===13){
                        seatCount = 10;
                      }else if (rowNumber ===14){
                        seatCount = 14;
                      }
                      return (
        <div key={rowNumber} className={`row_${rowNumber}`}>
          <p>{rowNumber}</p>
          {[...Array(seatCount)].map((_, seatIndex) => (
            <div
              key={seatIndex}
              className={`circle ${
                selectedSeats.some(s => s.row === rowNumber && s.seat === seatIndex + 1)
                  ? 'active'
                  : ''
              }`}
              onClick={() => handleSeatSelect(rowNumber, seatIndex + 1)}
            />
          ))}
        </div>
      );
    })}
                      
                      
                      </div>
            </div>
        </div>
        </div>
        </div>


      </div>
      
    );
}