import React, {Component} from 'react';
import axios from 'axios';
import PortfolioCard from './portfolioCard';
import devData from '../devDetails.json';

export default class Portfolio extends Component{

    constructor(props){
        super(props);
         this.state = {
            repoArray : []
         }
    }

    componentDidMount = () => {
        this.getGitRepositories();
    }

    getGitRepositories = e => {
        axios.get(devData.gitHubLink + devData.gitHubUsername + devData.gitHubQuerry)
        .then(res => {
            console.log(res.data);
            this.setState({
                repoArray: res.data
            })  
            console.log(this.state.repoArray[0]);
        }).catch( err => {
            console.log("error : " + err);
        }
        )
    }

    render() {
        return (
            <section class="site-section" id="section-portfolio">
            <div class="container">
                <div class="row">
                    <div class="section-heading text-center col-md-12">
                        <h2>Featured <strong>Portfolio</strong></h2>
                    </div>
                </div>
                <div class="filters">
                    <ul>
                        <li class="active" data-filter="*">All</li>
                        <li data-filter=".packaging">Packaging</li>
                        <li data-filter=".mockup">Mockup</li>
                        <li data-filter=".typography">Typography</li>
                        <li data-filter=".photography">Photography</li>
                    </ul>
                </div>
    
                <div class="filters-content">
                    <div class="row grid">
                        <PortfolioCard/>
                    </div>
                </div>
            </div>
        </section>
      
        );
    }

}