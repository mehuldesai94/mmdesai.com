import React, { Component } from 'react';
import devData from '../devDetails.json';

export default class Resume extends Component {

    constructor(props) {
        super(props)
        this.state = {
            education: devData.education,
            experience: devData.experience
        }
    }

    render() {
        return (
            <div>
                <section class="site-section " id="section-resume">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb-5">
                                <div class="section-heading text-center">
                                    <h2>My <strong>Resume</strong></h2>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <h2 class="mb-5">Education</h2>
                                {this.state.education.map(college => {
                                    return <div class="resume-item mb-4" key={college.key}>
                                        <span class="date"><span class="icon-calendar"></span> {college.startDate} - {college.endDate}</span>
                                        <h3>{college.program}</h3>
                                        <p>{college.description}</p>
                                        <span class="school">{college.college}</span>
                                    </div>
                                })}
                            </div>


                            <div class="col-md-6">
                                <h2 class="mb-5">Experience</h2>
                                {this.state.experience.map(exp => {
                                    return <div class="resume-item mb-4" key={exp.key}>
                                        <span class="date"><span class="icon-calendar"></span> {exp.startDate} - {exp.endDate}</span>
                                        <h3>{exp.position}</h3>
                                        <p>{exp.description}</p>
                                        <span class="school">{exp.company}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}