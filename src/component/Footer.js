import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!----------------------Footer-----------------------------------> */}

                <footer className="p-2 pt-5 back-color-footer">
                    <div className="row container-fluid mx-auto text-center ">
                        <div className="col-lg-3">
                            <h4>Support</h4>
                            <p>Help Center</p>
                            <p>Our COVID-19 Response</p>
                            <p>Cancellation option</p>
                            <p>Safty information</p>
                        </div>

                        <div className="col-lg-3">
                            <h4>Company</h4>
                            <p>About us</p>
                            <p>Community Blog</p>
                            <p>careers</p>
                            <p>Privacy policy</p>
                            <p>Terms of service</p>
                        </div>

                        <div className="col-lg-3">
                            <h4>Contact</h4>
                            <p>Partnership</p>
                            <p>FAQ</p>
                            <p>Get in touch</p>

                        </div>

                        <div className="col-lg-3">
                            <h4>Social</h4><br /><br />
                            <i className="fa-brands fa-facebook-f f-icon-1 m-1"></i>
                            <i className="fa-brands fa-twitter f-icon-2 m-1"></i>
                            <i className="fa-brands fa-instagram f-icon-3 m-1"></i>
                            <i className="fa-brands fa-youtube f-icon-4 m-1"></i>
                        </div>
                    </div>

                    <hr />

                    <div className="row container-fluid mx-auto">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <p className="pt-1"> <i className="fa-regular fa-copyright pt-3"></i> Copyright Traveler 2022</p>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7  pb-3 ">
                            <div className="clearfix1 footer-img">
                                <img src="/assets/image/visa.png" alt="" className="img-fluid footer-icon" />
                                <img src="/assets/image/mastercard.png" alt="" className="img-fluid footer-icon" />
                                <img src="/assets/image/discover.png" alt="" className="img-fluid footer-icon" />
                                <img src="/assets/image/paypal.png" alt="" className="img-fluid footer-icon" />
                                <img src="/assets/image/jcb.png" alt="" className="img-fluid footer-icon" />
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}
