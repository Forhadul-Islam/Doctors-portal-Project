import React from 'react';
import './AvailableAppointments.css';
import AppointmentItems from '../AppointmentImes/AppointmentItems';
const AvailableAppointments = (props) => {
    const date = props.date.toString();
    return (
        <div className="availableAppointmentArea container">
            <div>
                <h2 style={{ color: 'rgb(12, 150, 150)' }}>Available Appointments on <span>{date}</span></h2>
            </div>
            <div className="availableAppointments">
                <AppointmentItems
                    date={date}
                ></AppointmentItems>
            </div>
        </div>
    );
};

export default AvailableAppointments;