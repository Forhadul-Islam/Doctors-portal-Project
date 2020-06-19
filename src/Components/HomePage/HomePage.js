import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button } from 'react-bootstrap';
import './HomePage.css';
import banarImg from '../../images/5790-removebg.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
    return (
        <div>
            <Jumbotron className="appointmentArea">
                <Navbar></Navbar>
                <div className="row">
                    <div className=" getAppointment col-md-6">
                        <h1>Your new smile starts here</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque, maiores dolor ipsam mollitia vero provident sit temporibus adipisci eos facilis repellendus suscipit, inventore quidem.
                        </p>
                        <p>
                            <Link to="/appointment">
                                <Button variant="info">Get Appointment</Button>
                            </Link>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="banarImg" src={banarImg} alt="" />
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
};

export default HomePage;