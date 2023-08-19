import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }
    render() {
        return (
            <div>
                <section className="Message-section" >
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Send a message</h2>
                        </div>
                    </div>
                    <form onSubmit={this.props.submit}>
                        <div className="row mt-3">

                            <div className="col-lg-6 mt-2">
                                <input type="text" className="form-control" name="name" id="inlineFormInputGroupUsername" placeholder="Your Name" required />
                            </div>
                            <div className="col-lg-6 mt-2">
                                <input type="text" className="form-control" name="number" id="inlineFormInputGroupUsername" placeholder="Phone Number" required />
                            </div>
                        </div>

                        <div className="col-lg-12 mt-4">
                            <input type="Email" className="form-control" name='email' id="inlineFormInputGroupUsername" placeholder="Your Mail" required />
                        </div>

                        <div className="form-group mt-4">
                            <textarea className="form-control rounded-0" name='message' id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
                        </div>

                        <div className="col-lg-1 mt-4">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}
