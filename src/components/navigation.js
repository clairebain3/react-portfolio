import React, { useState } from 'react';
import AboutMe from './aboutme';
import Footer from './footer';
import Resume from './resume';
// import all the files? this will be the page generated?

export default function Navigation(props){
    const [input, setInout] = useState('');
    let [section, setSection] = useState(AboutMe);

    const sections = [AboutMe, 'Portfolio', 'Contact', Resume]

    return(
        <div>
            <header>
            <nav>
        <p>Claire Bain</p>
        <p onClick={() => setSection(sections[0])}>About Me</p>
        <p onClick={() => setSection(sections[1])}>Portfolio</p>
        <p onClick={() => setSection(sections[2])}>Contact</p>
        <p onClick={() => setSection(sections[3])}>Resume</p>
        </nav>

            </header>
            <p>{section}</p>
            <Footer />
        </div>
    );

}
// export default generatePage;