const Header = () => {
  return (
    <header>
      <nav>
      <div class="logoName">
                    <h2>Mark Duffy</h2>
      </div> 
            
        <ul className="navBar">
            
            <li><a href="https://markduffy.ca/" target="blank" aria-label="Go to Mark Duffy's Portfolio">Portfolio</a></li>
            <li><a href="https://github.com/duffymark" target="blank" aria-label="Go to Mark Duffy's Github">Github</a></li>
            <li><a href="https://www.linkedin.com/in/markduffy-webdev/" aria-label="Mark Duffys linkedIn">LinkedIn</a></li>
            <li><a href="mailto:duffy_mark@hotmail.com" aria-label="Mark Duffys email address">Email</a></li>
            <li><a href={require('./assets/resume.pdf')} class="hiddenLinks" 
                    alt='Download a copy of my resume' target='blank'>Resume</a></li>
        </ul>
      
      </nav>
      <div className="backgroundImg"> 
      <div className="flexTitle">
      <div className="wrapper">
      <h1>My Journey to Become a Web Developer</h1>
      </div>

 <div class="arrow_container">
        <a href="#scrollStart">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <span class="text">Scroll down</span>
        </a>
    </div>

      </div> 
      </div>

    </header>
  )
}

export default Header;