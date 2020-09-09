import React, { Component } from 'react';
import axios from 'axios';
import devDetail from '../devDetails.json';


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: devDetail.devFirstName,
            lastName: devDetail.devLastName,
            profile: "Not Available"
        }
    }

    componentDidMount = () => {
        this.featchInstaProfile();
    }

    featchInstaProfile = async e => {
        await axios.get(devDetail.instaLink + devDetail.instaUserName + devDetail.instaQuery)
            .then(res => {
                this.setState({
                    profile : res.data.graphql.user.profile_pic_url
                })
            }).catch(err => {
                console.log(err)
            }).finally(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <section class="site-hero" style={{ backgroundImage: `url(${this.state.profile})`}} id="section-home" data-stellar-background-ratio="0.5">
                {/* <section class="site-hero" style="background-image: url(https://drive.google.com/file/d/1EDc-1UvUYKJF_0uuFLg7-091qlJcDopv/view?usp=sharing)" id="section-home" data-stellar-background-ratio="0.5"> */}
                    <div class="container">
                        <div class="row intro-text align-items-center justify-content-center">
                            <div class="col-md-10 text-center pt-5">

                                <h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">{this.state.firstName + ' ' + this.state.lastName}</strong></h1>
                                <strong class="d-block text-white text-uppercase letter-spacing">and this is My Rezume</strong>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}