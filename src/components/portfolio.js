// my project data can be an object that i pass in as props and iterate over with the component
import React, {useState}  from 'react';
import Projects from './/../assets/projectdata.json';
import pic from './/../assets/BOBCongratsScreenshot.jpeg';
import pic1 from './/../assets/techblogpic.png';
import pic2 from './/../assets/Weather-pic.png';
import pic3 from './/../assets/gif-movie-site.png';
import pic4 from './/../assets/pwatexteditorpic.png';
import pic5 from './/../assets/Book-Search.png'
import pic6 from './/../assets/bookbuddy.png';
import ExModal from "./Modal";
import Infomodal from './Infomodal'
// import { useState } from 'react';

// function handleshowDesc(e) {
//     console.log(e.target.item.desc)

//   }


const url = [pic, pic1, pic2, pic3, pic4, pic5, pic6]

// const myvar = Projects[0].name
// const props = Projects
// const test = Projects.map(displayProjects)
// console.log(test)

function Project(item) {
    
    let [show, setShow] = useState(false); 
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
      
    return(<div class = "picContainer">
    <img class="portfoliopic" src = {url[item.pic]} style={{cursor:'pointer'}} onClick={handleShow}/>
    <div  >
    <p class = "picTitle">{item.name}</p>
    <a class = "picContent" target="_blank" href = {item.application}>View Live App</a>
    <a class = "picContent" target="_blank" href = {item.repo}>GitHub Repo</a>
    <Infomodal
      // let [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
                // buttonName="btn"
                handleClose ={handleClose}
                show={show}
                modalTitle={item.name}
                // modalFunction="add"
                modalInformation={item.desc}
                // onClickInfo="onclick"
              />
    {/* <p class = "desc">{item.desc}</p> */}
    
    </div>
    </div>
    
    )
        // item.name)

}
function Portfolio(props){
    return(<div class = "projcontainer">
        {Projects.map(Project)}

        {/* <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact</p>
        <p>Resume</p> */}
        {/* </nav> */}
        
    </div>);



}
export default Portfolio;