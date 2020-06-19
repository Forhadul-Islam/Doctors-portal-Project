import React, { useState } from 'react';
import './AppointmentForm.css';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import { useForm } from "react-hook-form";
import { useDate } from '../Appointment/Appointment';

const AppointmentForm = (props) => {
    // const date = useDate();
    const [patientInformation, setPatientInformation] = useState(null);
    const date = props.date;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        setPatientInformation(data);

        const appointment = {
            appointment_for: props.appointmentFor,
            appointment_information: data
        }

        //data save to database
        fetch('http://localhost:4000/appointments', {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // setPatientInformation(data);
                console.log('successfully added', data);
            })
    };
    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div style={{ display: patientInformation ? 'none' : 'block' }}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Book an appointment
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="formArea" style={{ lineHeight: "1" }} onSubmit={handleSubmit(onSubmit)}>
                            <select id="time" className="formInput">
                                <option value="7">MORNING</option>
                                <option value="8">EVENING</option>
                            </select>
                            <br />
                            <input className="formInput" name="name" ref={register({ required: true })} placeholder="Your name" />
                            {errors.name && <span>Name is required</span>}
                            <br />
                            <input className="formInput" name="email" ref={register({ required: true })} placeholder="Your email" />
                            {errors.email && <span>Email is required</span>}
                            <br />
                            <input className="formInput" name="address" ref={register({ required: true })} placeholder="Address" />
                            {errors.address && <span>Address is required</span>}
                            <br />
                            <input className="formInput" name="phone" ref={register({ required: true })} placeholder="phone number" />
                            {errors.phone && <span>Phone number is required</span>}
                            <br />
                            <input className="formInput" value={date} name="date" ref={register({ required: true })} placeholder="DD/MM/YY" />
                            {errors.date && <span>This field is required</span>}
                            <br />
                            <input className="formSubmitButton " type="submit" />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="bookAppointmentBtn" onClick={props.onHide}>Close</button>
                    </Modal.Footer>
                </div>
                <div className="appointmentSuccessMessage" style={{ display: patientInformation ? 'block' : 'none' }}>
                    <h3>Your Appointment Confirmed. Thank you!  </h3>
                </div>
            </Modal>
        </div>
    );
};

export default AppointmentForm;