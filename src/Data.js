import React, { Component } from 'react';

export default class Data extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: '-45px' }}>

                    <h2>Check Your Submitted message</h2>
                    <h5>Your Name : {this.props.name}</h5>
                    <h5>Phone Number : {this.props.number} </h5>
                    <h5>Your Mail : {this.props.email} </h5>
                    <h5>Message : {this.props.message} </h5>
                </div>
            </div>
        );
    }
}
