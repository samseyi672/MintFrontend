import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    
    render() {
        return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <Link className="navbar-brand" to="/">
                MInt financial Technology 
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link " to="/">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/card-scheme/start?start=1&limit=25">
                            List of Validated Card
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        );
    }
}
