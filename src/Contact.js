import React, { Component } from 'react';
import Iframe from 'react-iframe'
import Thankyou from './Thankyou';
import Form from './Form';
import Address from './Address';
import Data from './Data';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm: false,
            isAddress: false,
            name: null,
            number: null,
            email: null,
            message: null,
        }
    }

    submitHandler = (e) => {
        console.log(this.state);
        e.preventDefault();
        const name = e.target.name.value;
        const number = e.target.number.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        this.setState({ name, number, email, message, isForm: true, isAddress: true }, () => {
            console.log(this.state)

        })
    }

    render() {
        return (
            <div>
                {/* <!-------------------------Map section---------------------------------> */}
                <div className="mapouter container-fluid mt-5">
                    <div className="gmap_canvas"><Iframe className="gmap_iframe" width="100%" height='580px' frameborder="0" scrolling="no"
                        marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=1800&amp;height=700&amp;hl=en&amp;q=veer narmad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></Iframe></div>
                </div>
                {/* <!-------------------------Map section end---------------------------------> */}

                <div className="row container mx-auto my-5">
                    <div className="col-lg-6 mt-5 p-5">
                        {/* <h2>Contact information</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row mt-5 pb-2" style={{borderBottom:'1px solid rgb(230, 230, 230)'}}>
                <div className="col-lg-1">
                    <i className="fa-solid fa-location-dot contact-icon"></i>
                </div>
                <div className="col-lg-11">
                    <h6 className="pt-1">540 Libety Road, New District, New York</h6>
                </div>
            </div>

            <div className="row mt-3 pb-2" style={{borderBottom:'1px solid rgb(230, 230, 230)'}}>
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
            </div>   */}
                        {this.state.isAddress ? <Data name={this.state.name} number={this.state.number} email={this.state.email} message={this.state.message}></Data> : <Address submit={this.submitHandler}></Address>}
                    </div>

                    <div className="col-lg-6 mt-5" >
                        {this.state.isForm ? <Thankyou></Thankyou> : <Form submit={this.submitHandler}></Form>}
                    </div>
                </div>
            </div>
        );
    }
}
