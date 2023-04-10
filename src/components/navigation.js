import React, { useState } from 'react';
import AboutMe from './aboutme';
import Footer from './footer';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';
import triangle from './/../assets/triangle.png';
// import all the files? this will be the page generated?

export default function Navigation(){
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


    // let [section, setSection] = useState(AboutMe);
    // let [isActive, setActive] = useState(false);

    // const toggleClass = (sec) => {
    //   setActive(!isActive);
    //   setSection(sections[sec])
    // }
    // const sections = [AboutMe, Portfolio, Contact, Resume]

    return(
        <div>
            <header>
            <nav class="navbar navbar-expand-lg  header">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Claire Bain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* act 24 for consitional rendering */}
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >About Me</a>
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >Resume</a>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio</a>
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact</a>
        {/* <a onClick={() => {toggleClass(0)}} className={isActive ? 'nav-link active': 'nav-link'} aria-current="page" href="#">About Me</a> 
        <a onClick={() => {toggleClass(1)}} className={isActive ? 'nav-link active': 'nav-link'} href="#">Portfolio</a>
        <a onClick={() => {toggleClass(2)}} className={isActive ? 'nav-link active': 'nav-link'} href="#">Contact</a>
        <a onClick={() => {toggleClass(3)}} className={isActive ? 'nav-link active': 'nav-link'} href ="#">Resume</a> */}
      </div>
    </div>
  </div>
</nav>
     

            </header>
            <div class = "mainContainer" >
              <div class = "triangle">
            <img src={triangle} alt = "large purple triangle" width="300" height="500"/>
            </div>
            <div class = "main">
            <p>{renderPage()}</p>
            </div>
            </div>
            <Footer />
        </div>
    );

}
// export default generatePage;