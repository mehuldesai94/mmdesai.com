import React, { Component } from 'react';

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
                    <a href={this.state.project.homeImg} class="img-pop-up">
                        <div class="thumb">
                            <div class="overlay overlay-bg"></div>
                            <img class="image img-fluid" src={this.state.project.homeImg} style={{ height: '200px' }} alt="" />
                        </div>
                    </a>


                </div>
                <div class="p-inner">
                    <h4>{this.state.project.name}</h4>
                    <a href={(this.state.project.homepage !== "") ? this.state.project.homepage : this.state.project.html_url} target="_blank" rel="noopener noreferrer">
                        <div class="cat">{(this.state.project.homepage !== "") ? "PREVIEW" : "GITHUB"}</div>
                    </a>
                </div>
            </div>
        );
    }
}