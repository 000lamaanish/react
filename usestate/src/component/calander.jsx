import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calander.css"; // Custom styling

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="calendar-container">
            <h2>React Calendar</h2>
            <Calendar onChange={setDate} value={date} />
            <p>Selected Date: {date.toDateString()}</p>
        </div>
    );
};

export default CalendarComponent;
