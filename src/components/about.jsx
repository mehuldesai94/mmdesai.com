import React, { Component } from 'react';
import axios from 'axios';
import devDetail from '../devDetails.json';
import Header from './header';
import img from '../images/img4.jpg'

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: 'not available',
            about: devDetail.aboutMe
        }
    }

    componentDidMount = () => {
        this.featchInstaProfile();
    }

    featchInstaProfile = async e => {
        await axios.get(devDetail.instaLink + devDetail.instaUserName + devDetail.instaQuery)
            .then(res => {
                this.setState({
                    profile: res.data.graphql.user.profile_pic_url
                })
            }).catch(err => {
                console.log(err)
            }).finally(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <Header />
                <section class="site-section" id="section-about">
                    <div class="container">
                        <div class="row mb-5 align-items-center">
                            <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                                {/* <img src={this.state.profile} alt="image" class="img-fluid" width="80%" height="80%" /> */}
                                <img src={img} alt=""  style={{height:"550px", textAlign:'left'}} class="img-fluid"/>
                            </div>
                            <div class="col-lg-5 pl-lg-5">
                                <div class="section-heading">
                                    <h2>About <strong>Me</strong></h2>
                                </div>
                                <p class="lead" >{this.state.about[0].paragraph1}</p>
                                <p class="mb-5  ">{this.state.about[1].paragraph2} </p>
                                <p>
                                    <a href="#section-contact" class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Get in Touch</a>
                                    {/* <a href="#" class="btn btn-secondary px-4 py-2 btn-sm">Download CV</a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        );
    }
}