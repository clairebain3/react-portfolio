import React from 'react';
import MyResume from './/../assets/CBResume.pdf';
function Resume() {

    return (
        <div>
            <span><p>Download my resume <a href={MyResume}>here!</a> </p> </span>
            <h3>Front End Technical Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JQuery</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>React</li>
            </ul>
            <h3>Back End Technical Skills</h3>
            <li>MYSQL</li>
            <li>SQL Server</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Express</li>
            <li>Node</li>
            <li>Webpack</li>

        </div>

    )}
    
    export default Resume;  