import React, { Component } from 'react';
import devData from '../devDetails.json'

export default class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            instaLink: devData.instaLink + devData.instaUserName,
            facebooklink: devData.facebookLink,
            linkedInLink: devData.linkedInLink,
            twitterLink: devData.twitterLink,
            githubLink: devData.githubLink
        }
    }

    render() {
        return (
            <div>
                <footer class="site-footer">
                    <div class="container">

                        <div class="row mb-5">
                            <p class="col-12 text-center">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Made with <i class="icon-heart text-danger" aria-hidden="true" ></i> | Thanks <a href="https://colorlib.com" class="text-primary">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>

                        <div class="row mb-5">
                            <div class="col-md-12 text-center">
                                <p>
                                    <a href={this.state.linkedInLink} class="social-item" target="_blank" rel = "noopener noreferrer"><span class="icon-linkedin2"></span></a>
                                    <a href={this.state.githubLink} class="social-item" target="_blank" rel = "noopener noreferrer"><span class="icon-github2"></span></a>
                                    {/* <a href={this.state.facebooklink} class="social-item" target="_blank" rel = "noopener noreferrer"><span class="icon-facebook2"></span></a>
                                    <a href={this.state.twitterLink} class="social-item" target="_blank" rel = "noopener noreferrer"><span class="icon-twitter"></span></a>
                                    <a href={this.state.instaLink} class="social-item" target="_blank" rel = "noopener noreferrer"><span class="icon-instagram2"></span></a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}