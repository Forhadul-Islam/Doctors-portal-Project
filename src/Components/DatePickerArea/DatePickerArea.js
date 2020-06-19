import React, { useState } from 'react';
import './DatePickerArea.css';
import Navbar from '../Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentAreaImg from '../../images/Mask Group 1.png'


const DatePickerArea = (props) => {
    // const [date, setDate] = useState(new Date());

    return (
        <div className="datePickerArea">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="datePickerArea-content">
                <div className="calendarArea">
                    <div>
                        <h2>Appointment</h2>
                    </div>
                    <div className="calendar">
                        <Calendar
                            onChange={date => { props.handleSetDate(date.toDateString()) }}
                        // onChange={date => setDate(date)}
                        />
                    </div>
                </div>
                <div >
                    <img className="coverImage" src={AppointmentAreaImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DatePickerArea;