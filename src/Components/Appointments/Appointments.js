import React, { useState, useEffect } from 'react';
import './Appointments.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Table from 'react-bootstrap/Table'

const Appointments = (props) => {
    const [date, setDate] = useState([]);
    console.log(date)
    const handleSelectDate = (date) => {
        setDate(date)
        console.log(date)
        fetch('http://localhost:4500/appointmentsForDate', {
            method: 'POST',
            body: JSON.stringify(date),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // setPatientInformation(data);
                console.log('successfully added', data);
            })
    }

    return (
        <div className="AppointmentsContainer">
            {/* <h1 style={{ color: '#738118' }}>This page is under construction</h1> */}
            <h5>Appointments</h5>
            <div className="row">

                <div className="calendarSection col-md-5">
                    <Calendar
                        onChange={date => handleSelectDate(date.toDateString())}
                    // onChange={date => setDate(date)}
                    />
                </div>

                <div className=" currentDateAppointmentsArea col-md-5">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Name</th>
                                <th>Schedule</th>
                                <th>Treatment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Appointments;