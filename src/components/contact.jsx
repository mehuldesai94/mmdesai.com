import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import devData from '../devDetails.json';
// import CustomizedSnackbars from './errorMessage';

// https://blog.mailtrap.io/react-contact-form/
// https://material-ui.com/components/snackbars/
// vercel.com mail/send


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: devData.devEmail,
            phone: devData.devPhone,
            street1: devData.street1,
            street2: devData.street2,
            city: devData.city,
            province: devData.province,
            country: devData.country,
            postalcode: devData.postalcode,
            // contact form data
            senderName: '',
            senderEmail: '',
            senderPhone: '',
            senderMessage: ''
            // badData: false
        }
    }



    handleSubmit(event) {
        event.preventDefault();
        const senderData = {
            name: this.state.senderName,
            phone: this.state.senderPhone,
            email: this.state.senderEmail,
            message: this.state.senderMessage
        }

        if (this.validateFormDetails(senderData)) {
            axios({
                method: "POST",
                baseURL: 'https://mmd-db-connector.vercel.app/',
                url: "mail/send",
                data: senderData
            }).then((response) => {
                if (response.status === 200) {
                    alert("Message Sent.");
                    this.resetForm()
                } else {
                    alert("Unable to send.")
                }
            });
        }
    }

    validateFormDetails = data => {
        // console.log("here", data);
        // if (data.name === ""){
        //     this.setState({ badData: true });
        // }
        if (data.name === "") {
            alert("Please, insert valid name!");
            return false;
        }
        else if (data.phone === "") {
            alert("Please, insert call back number!");
            return false;
        }
        else if (data.message === "") {
            alert("Please, insert valid reason to connect!");
            return false;
        }
        return true;
    }

    resetForm = () => {
        this.setState({
            senderName: '',
            senderEmail: '',
            senderPhone: '',
            senderMessage: ''
        })
    }

    onFormDataChange = event => {
        const textid = event.target.id;
        if (textid === "senderName") {
            this.setState({
                senderName: event.target.value
            })
        }
        else if (textid === "senderEmail") {
            this.setState({
                senderEmail: event.target.value
            })
        }
        else if (textid === "senderPhone") {
            this.setState({
                senderPhone: event.target.value
            })
        }
        else if (textid === "senderMessage") {
            this.setState({
                senderMessage: event.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <section class="site-section" id="section-contact">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb-5">
                                <div class="section-heading text-center">
                                    <h2>Get <strong>In Touch</strong></h2>
                                </div>
                            </div>

                            <div class="col-md-7 mb-5 mb-md-0">
                                <form class="site-form" method="POST" onSubmit={this.handleSubmit.bind(this)}>
                                    <h3 class="mb-5">Get In Touch</h3>

                                    {/* sender name */}
                                    <div class="form-group">
                                        <input id="senderName" type="text"
                                            class="form-control px-3 py-4" placeholder="Your Name"
                                            onChange={this.onFormDataChange.bind(this)}
                                            value={this.state.senderName} />
                                    </div>

                                    {/* sender email */}
                                    <div class="form-group">
                                        <input id="senderEmail" type="email"
                                            class="form-control px-3 py-4" placeholder="Your Email"
                                            onChange={this.onFormDataChange.bind(this)}
                                            value={this.state.senderEmail} />
                                    </div>

                                    {/* sender phone */}
                                    <div class="form-group">
                                        <input id="senderPhone" type="phone"
                                            class="form-control px-3 py-4" placeholder="Your Phone"
                                            onChange={this.onFormDataChange.bind(this)}
                                            value={this.state.senderPhone} />
                                    </div>

                                    {/* sender message */}
                                    <div class="form-group mb-5">
                                        <textarea id="senderMessage" class="form-control px-3 py-4"
                                            cols="30" rows="10" placeholder="Write a Message"
                                            onChange={this.onFormDataChange.bind(this)}
                                            value={this.state.senderMessage} ></textarea>
                                    </div>

                                    <div class="form-group">
                                        <input type="submit" class="btn btn-primary  px-4 py-3" value="Send Message" />
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-5 pl-md-5">
                                <h3 class="mb-5">My Contact Details</h3>
                                <ul class="site-contact-details">
                                    <li>
                                        <span class="text-uppercase">Email</span>
                                        {this.state.email}
                                    </li>
                                    <li>
                                        <span class="text-uppercase">Phone</span>
                                        {this.state.phone}
                                    </li>

                                    <li>
                                        <span class="text-uppercase">Address</span>
                                        {this.state.city}, {this.state.country} <br />
                                        {this.state.street1}  <br />
                                        {this.state.street2}, {this.state.postalcode}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* {(this.state.badData) ? <CustomizedSnackbars /> : null} */}
            </div>
        );
    }
}