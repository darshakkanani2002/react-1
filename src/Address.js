import React, { Component } from 'react';

export default class Address extends Component {
    render() {
        return (
            <div>
                <h2>Contact information</h2>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="row mt-5 pb-2" style={{ borderBottom: '1px solid rgb(230, 230, 230)' }}>
                    <div className="col-lg-1">
                        <i className="fa-solid fa-location-dot contact-icon"></i>
                    </div>
                    <div className="col-lg-11">
                        <h6 className="pt-1">540 Libety Road, New District, New York</h6>
                    </div>
                </div>

                <div className="row mt-3 pb-2" style={{ borderBottom: '1px solid rgb(230, 230, 230)' }}>
                    <div className="col-lg-1">
                        <i className="fa-solid fa-phone-volume contact-icon"></i>
                    </div>
                    <div className="col-lg-11">
                        <h6 className="pt-1">(000) 999 -656 -888</h6>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-1">
                        <i className="fa-regular fa-envelope contact-icon"></i>
                    </div>
                    <div className="col-lg-11">
                        <h6 className="pt-1">travelerwp@gmail.com</h6>
                    </div>
                </div>
            </div>
        );
    }
}
