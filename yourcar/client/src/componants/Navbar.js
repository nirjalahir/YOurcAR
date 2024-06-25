import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import '../componants/Navbar.css'
export default function Navbar() {
    const location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">YOurcAR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">

                                {location.pathname === '/newspage' ? (<a className="nav-link" href="/"></a>) : (<a className="nav-link" href="/newspage">Daily News</a>)}
                            </li>
                            <li className="nav-item">

                                {location.pathname === '/readinfo' ? (<a className="nav-link" href="/form">back</a>) : (<a></a>)}
                            </li>
                            <li className="nav-item">

                                {location.pathname === '/CarsInfo' ? (<a className="nav-link" href="/readinfo">back</a>) : (<a></a>)}
                            </li>
                        </ul>
                        <li className="btn btn-outline-danger">
                            {location.pathname === '/filtered' ? (
                                <Link className="nav-link" to="/login">Logout</Link>
                            ) : location.pathname === '/login' ? (
                                <Link className="nav-link" to="/form">New User</Link>
                            ) : (
                                <Link className="nav-link" to="/login">Login</Link>
                            )}
                        </li>

                    </div>
                </div>
            </nav>
        </div>
    )
}
