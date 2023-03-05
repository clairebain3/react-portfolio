// my project data can be an object that i pass in as props and iterate over with the component
import React  from 'react';
import Projects from './/../assets/projectdata.json';
import pic from './/../assets/BOBCongratsScreenshot.jpeg';
import pic1 from './/../assets/techblogpic.png';
import pic2 from './/../assets/Weather-pic.png';
import pic3 from './/../assets/gif-movie-site.png';
import pic4 from './/../assets/pwatexteditorpic.png';
import pic5 from './/../assets/Schedule-pic.png';



const url = [pic, pic1, pic2, pic3, pic4, pic5]

const myvar = Projects[0].name
const props = Projects
const test = Projects.map(displayProjects)
console.log(test)
function displayProjects(item){
    

    return(<div class = "picContainer">
    <img class="portfoliopic" src = {url[item.pic]}/>
    <div  >
    <p class = "picContent">{item.name}</p>
    <a class = "picContent" href = {item.application}>app</a>
    <a class = "picContent" href = {item.repo}>github</a>
    </div>
    </div>
    )
        // item.name)

}
function Portfolio(props){
    return(<div class = "projcontainer">
        {Projects.map(displayProjects)}

        {/* <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact</p>
        <p>Resume</p> */}
        {/* </nav> */}
    </div>);



}
export default Portfolio;