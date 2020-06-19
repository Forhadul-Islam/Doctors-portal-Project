import React from 'react';
import './Doctor.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Appointments from '../Appointments/Appointments';
import Patients from '../Patients/Patients';
import Prescriptions from '../Prescriptions/Prescriptions';
import Setting from '../Setting/Setting';

const routes = [
    {
        path: "/doctor",
        exact: true,
        // sidebar: () => <div>home!</div>,
        main: () => <Dashboard />
    },
    {
        path: "/doctor/dashboard",
        // sidebar: () => <div>bubblegum!</div>,
        main: () => <Dashboard />
    },
    {
        path: "/doctor/appointments",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Appointments />
    },
    {
        path: "/doctor/patients",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Patients />
    },
    {
        path: "/doctor/prescriptions",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Prescriptions />
    },
    {
        path: "/doctor/setting",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Setting ></Setting>
    }
];

const Doctor = () => {
    return (
        <Router>
            <div>
                <div className="row">
                    <div className=" sidebar col-md-3">
                        <div className="sidebarLinks">
                            <a href="/doctor/dashboard">Dashboard</a>
                            <a href="/doctor/appointments">Appointments</a>
                            <a href="/doctor/patients">Patients</a>
                            <a href="/doctor/prescriptions">prescriptions</a>
                            <a href="/doctor/setting">Setting</a>
                        </div>

                    </div>
                    <div className=" dashboardContent col-md-9">
                        <Switch>
                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Doctor;