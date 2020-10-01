import React, { Component } from 'react';
import axios from 'axios';
import devDetail from '../devDetails.json';
import bgimg from '../images/img3.jpg'

let imageSize = {
    
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
}

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
                    profile: res.data.graphql.user.profile_pic_url
                })
            }).catch(err => {
                console.log(err)
            })
    }

    render() {

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            backgroundImage: `url(${bgimg})`,
            width:'100%'
            
          };

        return (
            <div>
                {/* <section class="site-hero" style={{ backgroundImage: `url(${this.state.profile})`}} id="section-home" data-stellar-background-ratio="0.5"> */}
                {/* <section class="site-hero" style={{ backgroundImage: `url(${bgimg})`}} widh id="section-home" data-stellar-background-ratio="0.5"> */}
                <section class="site-hero" style={mystyle} widh id="section-home" data-stellar-background-ratio="0.5">
                    <div class="container">
                        <div class="row intro-text align-items-center justify-content-center">
                            <div class="col-md-10 text-center pt-5">

                                <h1 class="site-heading site-animate">Hello, I am <strong class="d-block">{this.state.firstName + ' ' + this.state.lastName}</strong></h1>
                                <strong class="d-block text-white text-uppercase letter-spacing">and this is My Resume</strong>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}