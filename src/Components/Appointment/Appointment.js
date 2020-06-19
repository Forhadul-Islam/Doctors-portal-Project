import React from 'react';
import DatePickerArea from '../DatePickerArea/DatePickerArea';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import { useState } from 'react';

export const useDate = () => {
    const [date, setDate] = useState(new Date().toDateString());
    return date;
}
const Appointment = () => {
    const [date, setDate] = useState(new Date().toDateString());
    const handleSetDate = (date) => {
        setDate(date);
    }
    console.log(date)
    return (
        <div>
            <div>
                <DatePickerArea
                    handleSetDate={handleSetDate}
                    date={date}
                ></DatePickerArea>
            </div>
            <div>
                <AvailableAppointments
                    date={date}
                ></AvailableAppointments>
            </div>
        </div>
    );
};

export default Appointment;