import React, { Component } from 'react';
import axios from 'axios';
import PortfolioCard from './portfolioCard';
import devData from '../devDetails.json';
import javaImg from "../images/java.jpg"
import comView from '../images/company-details-overview.JPG'
import dbConnector from '../images/dbConnector.JPG'
import ticTac from '../images/ticTac.JPG'
import strangerChat from '../images/strangerChat.JPG'
import umsApp from '../images/umsApp.JPG'
import singlePage from '../images/singlePage.JPG'
import companyProject from '../images/company-projects.JPG'


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
            repoArray: [],
            allRepoArray: []
        }
        this.filtergitRepositiories = this.filtergitRepositiories.bind(this)
    }

    componentDidMount = () => {
        this.getGitRepositories();
    }

    getGitRepositories = e => {

        const gitProject = [
            297478570, 188854406, 175237813,
            210914073, 282307238, 286887227,
            276729463, 196019289, 196013842
        ] //298090992

        axios.get(devData.gitHubLink + devData.gitHubUsername + devData.gitHubQuerry)
            .then(res => {

                //filter git projects
                const filteredProjects = [];
                console.log(res.data);
                //removed extra repositories
                res.data.map(gitRepo => {
                    if (gitProject.includes(gitRepo.id))
                        filteredProjects.push(gitRepo);
                    return filteredProjects;    
                })

                //insert languages and home pic to object array
                filteredProjects.map(pro => {
                    if (pro['id'] === 297478570) { //single page
                        pro['codeOn'] = devData.basic;
                        pro['homeImg'] = singlePage;
                    }
                    else if (pro['id'] === 188854406) {
                        pro['homeImg'] = companyProject;
                        pro['codeOn'] = devData.react
                    }
                    else if (pro['id'] === 175237813) {
                        pro['homeImg'] = javaImg;
                        pro['codeOn'] = devData.java
                    }
                    else if (pro['id'] === 210914073) { //Strainger chat
                        pro['homeImg'] = strangerChat;
                        pro['codeOn'] = devData.node
                    }
                    else if (pro['id'] === 282307238) { //mongo DB connector
                        pro['homeImg'] = dbConnector;
                        pro['codeOn'] = devData.node
                    }
                    else if (pro['id'] === 286887227) { //umsApp
                        pro['homeImg'] = umsApp;
                        pro['codeOn'] = devData.react
                    }
                    else if (pro['id'] === 276729463) { //ticTac game
                        pro['homeImg'] = ticTac;
                        pro['codeOn'] = devData.react
                    }
                    else if (pro['id'] === 196019289) {
                        pro['homeImg'] = javaImg;
                        pro['codeOn'] = devData.java
                    }
                    else if (pro['id'] === 196013842) {
                        pro['homeImg'] = javaImg;
                        pro['codeOn'] = devData.java
                    }
                    else if (pro['id'] === 298090992) { //company Details Overview
                        pro['homeImg'] = comView;
                        pro['codeOn'] = devData.node
                    }
                    return pro;    
                })

                this.setState({
                    repoArray: filteredProjects,
                    allRepoArray: filteredProjects
                })

                console.log(filteredProjects);

            }).catch(err => {
                console.log("error : " + err);
            })
    }

    filtergitRepositiories = e => {
        e.preventDefault();
        
        const codeOn = e.target.value;

        this.setState({
            repoArray: this.filterStateRepo(codeOn)
        })
    }

    filterStateRepo = (codeOn) => {
        const filterData = [];
        const data = this.state.allRepoArray;
        data.map(gitRepo => {
            if (codeOn === devData.all)
                filterData.push(gitRepo);
            else if (gitRepo['codeOn'] === codeOn)
                filterData.push(gitRepo);
            
            return filterData;    
        })
        return filterData;
    }



    render() {
        return (
            <>
            <section class="site-section" id="section-portfolio">
                <div class="container">
                    <div class="row">
                        <div class="section-heading text-center col-md-12">
                            <h2>Featured <strong>Portfolio</strong></h2>
                        </div>
                    </div>
                    <div class="filters">
                        <ul>
                            <li class="active" onClick={this.filtergitRepositiories.bind(this)} value={devData.all}>{devData.allStr}</li>
                            <li onClick={this.filtergitRepositiories.bind(this)} value={devData.react}>{devData.reactStr}</li>
                            <li onClick={this.filtergitRepositiories.bind(this)} value={devData.node}>{devData.nodeStr}</li>
                            <li onClick={this.filtergitRepositiories.bind(this)} value={devData.java}>{devData.javaStr}</li>
                            <li onClick={this.filtergitRepositiories.bind(this)} value={devData.basic}> {devData.basicStr}</li>
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
            </>
        );
    }

}