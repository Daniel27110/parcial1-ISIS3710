import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row h-100">
                {/* <div className="col-3 bg-light border-right" id="sidebar-wrapper"> */}
                {/* <div className="col-3 bg-dark border-right" id="sidebar-wrapper"> */}
                <div className="col-3 bg-primary border-right" id="sidebar-wrapper" style={{ height: '100vh' }}>                    <div className="list-group list-group-flush">

                    {/* Vertial spacing of 40px */}
                    <div style={{ height: '20px' }}></div>

                    {/* <Link to="/route1" className="list-group-item list-group-item-action bg-light">Route 1</Link>
                        <Link to="/route2" className="list-group-item list-group-item-action bg-light">Route 2</Link>
                        <Link to="/route3" className="list-group-item list-group-item-action bg-light">Route 3</Link> */}

                    {/* <Link to="/home" className="list-group-item list-group-item-action bg-dark text-white">Home</Link>
                        <Link to="/forum" className="list-group-item list-group-item-action bg-dark text-white">Forum</Link>
                        <Link to="/bar" className="list-group-item list-group-item-action bg-dark text-white">Top Navbar</Link> */}

                    <Link to="/home" className="list-group-item list-group-item-action bg-primary text-white">Home</Link>
                    <Link to="/forum" className="list-group-item list-group-item-action bg-primary text-white">Forum</Link>
                    <Link to="/bar" className="list-group-item list-group-item-action bg-primary text-white">Top Navbar</Link>


                    {/* Add more links as needed */}
                </div>
                </div>
                <div className="col-9 d-flex justify-content-center align-items-center">
                    <p>Hi</p>
                </div>


            </div>
        </div>
    );
}

export default Sidebar;