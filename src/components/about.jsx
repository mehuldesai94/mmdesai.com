import React, { Component } from 'react';
import axios from 'axios';
import devDetail from '../devDetails.json';


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
                <section class="site-section" id="section-about">
                    <div class="container">
                        <div class="row mb-5 align-items-center">
                            <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                                <img src={this.state.profile} alt="Image placeholder" class="img-fluid" width="80%" height="80%" />
                            </div>
                            <div class="col-lg-5 pl-lg-5">
                                <div class="section-heading">
                                    <h2>About <strong>Me</strong></h2>
                                </div>
                                <p class="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p class="mb-5  ">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                                <p>
                                    <a href="#section-contact" class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
                                    <a href="#" class="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
                                </p>
                            </div>
                        </div>


                    </div>
                </section>
            </div>

        );
    }
}