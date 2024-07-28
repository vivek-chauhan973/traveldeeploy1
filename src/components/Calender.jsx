import '../app/globals.css'; 
import { DayPicker } from 'react-day-picker';
const amountData = {
  '2024-06-11': '₹ 8,107',
  '2024-06-12': '₹ 6,399',
  '2024-06-13': '₹ 5,275',
  // ...
};

const CustomDay = ({ date, amount }) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }); 
  return (
    <div className="custom-day">
      <div>{formattedDate}</div>
      {amount ? <div className="amount">{amount}</div> : <div className="amount no-data">No Data</div>}
    </div>
  );
};

const BasicDateCalendar = () => {
  const renderDay = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const amount = amountData[dateString] || null; 
    return <CustomDay date={date} amount={amount} />;
  };

  return (
    <div>
      <DayPicker renderDay={renderDay} />
    </div>
  );
};

export default BasicDateCalendar;







