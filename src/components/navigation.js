import React, { useState } from 'react';
import AboutMe from './aboutme';
import Footer from './footer';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';
// import all the files? this will be the page generated?

export default function Navigation(){
    let [section, setSection] = useState(AboutMe);
    let [isActive, setActive] = useState(false);

    const toggleClass = (sec) => {
      setActive(!isActive);
      setSection(sections[sec])
    }
    const sections = [AboutMe, Portfolio, Contact, Resume]

    return(
        <div>
            <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Claire Bain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* act 24 for consitional rendering */}
        <a onClick={() => {toggleClass(0)}} className={isActive ? 'nav-link active': 'nav-link'} aria-current="page" href="#">About Me</a> 
        <a onClick={() => {toggleClass(1)}} className={isActive ? 'nav-link active': 'nav-link'} href="#">Portfolio</a>
        <a onClick={() => {toggleClass(2)}} className={isActive ? 'nav-link active': 'nav-link'} href="#">Contact</a>
        <a onClick={() => {toggleClass(3)}} className={isActive ? 'nav-link active': 'nav-link'} href ="#">Resume</a>
      </div>
    </div>
  </div>
</nav>
     

            </header>
            <p class = "main">{section}</p>
            <Footer />
        </div>
    );

}
// export default generatePage;