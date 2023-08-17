import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Nav extends Component {
    render() {
        return (
            <div>
                {/* <!---------------------------------Top---------------------------------> */}

                <div className="clearfix container-fluid mx-auto bg-dark text-light top-main-div">
                    <div>
                        <div className="clearfix top-icon2">
                            <i className="bi bi-telephone" style={{ fontSize: '15px' }}></i>
                            <p className="ms-2 padding"> (000) 999-656-888</p>
                        </div>
                    </div>

                    <div className="ms-3">
                        <div className="clearfix">
                            <i className="bi bi-envelope" style={{ fontSize: '15px' }}></i>
                            <p className="ms-2 padding">Example@gmail.com</p>
                        </div>
                    </div>
                    <div className="ms-auto top-icon-div">
                        <i className="fa-brands fa-facebook-f p-1 b top-icon"></i>
                        <i className="fa-brands fa-twitter p-1 top-icon"></i>
                        <i className="fa-brands fa-instagram p-1 top-icon"></i>
                        <i className="fa-brands fa-youtube p-1" style={{ fontSize: '12px' }}></i>
                    </div>
                </div>

                {/* <!-----------------------------------Navbar-------------------------------------------> */}
             
                        <nav className="navbar navbar-expand-lg sticky-top">
                            <div className="container-fluid">
                                <Link className="navbar-brand text-primary" to="#">
                                    <h2>logo</h2>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item px-2">
                                            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item active px-3">
                                            <Link className="nav-link active" to="about">About</Link>
                                        </li>
                                        <li className="nav-item dropdown px-3">
                                            <Link className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Listing
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                <li>
                                                    <hr className="dropdown-divider"></hr>
                                                </li>
                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item px-3 dropdown">
                                            <Link className="nav-link active dropdown-toggle">Hotel</Link>
                                        </li>

                                        <li className="nav-item px-3 dropdown">
                                            <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">Pages</Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="blog.html">Blog</Link></li>
                                                <li><Link className="dropdown-item" to="Export.html">Bcome Local Export</Link></li>
                                                <li><Link className="dropdown-item" to="login.html">Function: Log in</Link></li>
                                                <li><Link className="dropdown-item" to="404.html">404</Link></li>
                                                <li><Link className="dropdown-item" to="Faq.html">FAQ</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item px-3">
                                            <Link className="nav-link active" to="contact.html">Contact</Link>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <select name="" id="">
                                            <option value="">EUR</option>
                                            <option value="">AUD</option>
                                        </select>
                                        <span className="stt-icon stt-icon-bag02 ms-2 s2-span-icon"></span>
                                        <span className="stt-icon stt-icon-user1 ms-2 s2-span-icon"></span>
                                    </form>
                                </div>
                            </div>
                        </nav>

            </div>
        );
    }
}
