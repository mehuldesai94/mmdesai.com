import React, { Component } from 'react';
import reactImg from '../images/react.png'

export default class PortfolioCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project: this.props.value
        }
    }

    render() {
        return (
            <div class="single-portfolio col-sm-4 all mockup">
                <div class="relative">
                    <div class="thumb">
                        <div class="overlay overlay-bg"></div>
                        <img class="image img-fluid" src={reactImg} width='100%' height='100%' alt="" />
                    </div>
                    <a href="images/p1.jpg" class="img-pop-up">
                        <div class="middle">
                            <div class="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
                        </div>
                    </a>
                </div>
                <div class="p-inner">
                    <h4>{this.state.project.name}</h4>
                    <div class="cat">Mockup</div>
                </div>
            </div>
        );
    }
}