import  { useState, useEffect } from 'react';

const Calendar = () => {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    generateCalendar();
  }, []);

  const generateCalendar = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const daysArray = [];
    
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    
    setDays(daysArray);
  };

  const isToday = (day) => {
    return (
      day === currentDate.getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear()
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-sky-700 text-white py-3 text-center rounded-t-xl">
        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
      </div>
      <div className="border border-gray-300 rounded-b-xl">
        <div className="grid grid-cols-7 bg-gray-200">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="py-2 text-center font-semibold">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => (
            <div
              key={index}
              className={`py-2 text-center border border-gray-300 ${isToday(day) ? 'bg-sky-700 text-white font-bold' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
