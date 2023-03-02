import React, { useState } from 'react';
import AboutMe from './aboutme';
import Footer from './footer';
import Resume from './resume';
import Portfolio from './portfolio';
// import all the files? this will be the page generated?

export default function Navigation(){
    const [input, setInout] = useState('');
    let [section, setSection] = useState(AboutMe);

    const sections = [AboutMe, Portfolio, 'Contact', Resume]

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
        <a onClick={() => setSection(sections[0])} class="nav-link active" aria-current="page" href="#">About Me</a>
        <a onClick={() => setSection(sections[1])}class="nav-link" href="#">Portfolio</a>
        <a onClick={() => setSection(sections[2])}class="nav-link" href="#">Contact</a>
        <a onClick={() => setSection(sections[3])}class="nav-link" href ="#">Resume</a>
      </div>
    </div>
  </div>
</nav>
     

            </header>
            <p>{section}</p>
            <Footer />
        </div>
    );

}
// export default generatePage;