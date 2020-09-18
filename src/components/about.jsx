import React, { Component } from 'react';
import axios from 'axios';
import devDetail from '../devDetails.json';
import Header from './header';
import img from '../IMG_0394.JPG'

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: 'not available'
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
                                <img src={img} alt="image" class="img-fluid"/>
                            </div>
                            <div class="col-lg-5 pl-lg-5">
                                <div class="section-heading">
                                    <h2>About <strong>Me</strong></h2>
                                </div>
                                <p class="lead">Highly enthusiastic, punctual and reliable, I have demonstrated strong front-end and back-end development skills in the software industry</p>
                                <p class="mb-5  ">I have developed many side projects using my knowledge and skills as listed in my resume. Please feel free to take a look at my GitHub. </p>
                                <p>
                                    <a href="#section-contact" class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
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