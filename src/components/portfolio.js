// my project data can be an object that i pass in as props and iterate over with the component
import React  from 'react';
import Projects from './/../assets/projectdata.json';
import pic from './/../assets/BOBCongratsScreenshot.jpeg';
import pic1 from './/../assets/techblogpic.png';
import pic2 from './/../assets/Weather-pic.png';
import pic3 from './/../assets/gif-movie-site.png';
import pic4 from './/../assets/pwatexteditorpic.png';
import pic5 from './/../assets/Book-Search.png'
import pic6 from './/../assets/bookbuddy.png';
import ExModal from "./Modal";

// function handleshowDesc(e) {
//     console.log(e.target.item.desc)

//   }


const url = [pic, pic1, pic2, pic3, pic4, pic5, pic6]

// const myvar = Projects[0].name
// const props = Projects
// const test = Projects.map(displayProjects)
// console.log(test)
function displayProjects(item){
    

    return(<div class = "picContainer">
    <img class="portfoliopic" src = {url[item.pic]} style={{cursor:'pointer'}}/>
    <div  >
    <p class = "picTitle">{item.name}</p>
    <a class = "picContent" target="_blank" href = {item.application}>View Live App</a>
    <a class = "picContent" target="_blank" href = {item.repo}>GitHub Repo</a>
    {/* <p class = "desc">{item.desc}</p> */}
    <ExModal
                // buttonName="btn"
                modalTitle={item.name}
                // modalFunction="add"
                modalInformation={item.desc}
                // onClickInfo="onclick"
              />
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