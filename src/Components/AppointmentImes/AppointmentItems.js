import React from 'react';
import './AppointmentItems.css';
import serviceItems from '../../services/index'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AppointmentForm from '../AppointmentForm/AppointmentForm';


const AppointmentItems = (props) => {
    const [services, setServices] = useState(serviceItems);
    const [modalShow, setModalShow] = React.useState(false);
    const [appointmentFor, setAppointmentFor] = useState(null)
    const date = props.date;
    const handleAppointmentService = (service) => {
        setAppointmentFor(service);
        setModalShow(true);
    }
    return (
        <div className="availableAppointments">
            {
                services.map(service => <div >
                    <div className="serviceItem">
                        <h5 style={{ color: 'rgb(12, 150, 150)' }}>{service.service}</h5>
                        <h6 style={{ color: '#48403e', fontSize: '14px' }}>{service.time}</h6>
                        <p style={{ textTransform: 'uppercase', fontSize: '10px' }}>{service.availableSpaces}</p>

                        <button
                            onClick={() => handleAppointmentService(service)}
                            className="bookAppointmentBtn"
                        >
                            BOOK APPOINTMENT
                        </button>

                    </div>
                </div>)
            }
            <AppointmentForm
                appointmentFor={appointmentFor}
                date={date}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default AppointmentItems;