// my project data can be an object that i pass in as props and iterate over with the component
import React  from 'react';
import Projects from './projectdata.json';
const myvar = Projects[0].name
const props = Projects
const test = Projects.map(displayProjects)
console.log(test)
function displayProjects(item){
    return(item.name)

}
function Portfolio(props){
    return(<div>
        {Projects.map(displayProjects)}

        {/* <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact</p>
        <p>Resume</p> */}
        {/* </nav> */}
    </div>);



}
export default Portfolio;