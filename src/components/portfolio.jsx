import React, { Component } from 'react';
import axios from 'axios';
import PortfolioCard from './portfolioCard';
import devData from '../devDetails.json';


// Id              projects
// 297478570       single web page
// 188854406       company project portal
// 175237813       Tuition Management System
// 210914073        stranger Chat
// 282307238        Mongo Connector
// 286887227        UMS-App
// 276729463        Tic Tag Game  


export default class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repoArray: []
        }
    }

    componentDidMount = () => {
        this.getGitRepositories();
    }

    getGitRepositories = e => {

        const gitProject = [
            297478570, 188854406, 175237813,
            210914073, 282307238, 286887227, 
            196019289, 196013842, 197075156
        ]

        axios.get(devData.gitHubLink + devData.gitHubUsername + devData.gitHubQuerry)
            .then(res => {

                //filter git projects
                console.log(res.data);
                const filteredProjects = [];

                res.data.map(gitRepo => { 
                    if(gitProject.includes(gitRepo.id))
                        filteredProjects.push(gitRepo);
                 })

                this.setState({
                    repoArray: filteredProjects
                })
                console.log(this.state.repoArray[0]);
            }).catch(err => {
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
                            {this.state.repoArray.map(project => (
                                <PortfolioCard key={project.id} id={project.id} value={project} />
                            ))}

                        </div>
                    </div>
                </div>
            </section>

        );
    }

}