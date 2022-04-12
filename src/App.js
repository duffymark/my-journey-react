import './App.css';
import React, { useEffect } from 'react';
import Header from './Header.js';
import TwentyEighteen from './TwentyEighteen.js';
import TwentyNineteen from './TwentyNineteen.js';
import TwentyTwenty from './TwentyTwenty.js';
import TwentyTwentyOne from './TwentyTwentyOne.js';
import TwentyTwentyTwo from './TwentyTwentyTwo.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';






function App() {
  useEffect(() =>{
    Aos.init({duration: 2000});
  }, [])
  return (
    <div className="App">
      
      <Header />

      <div className="wrapper">
        
          <div className="paraText" data-aos="fade-up"><TwentyEighteen /></div>
      </div> {/*end of wrapper */}

          <div className="paraText bgImg"  data-aos="fade-up"><TwentyNineteen /></div>
      
          <div className="paraText twentyTwenty" data-aos="fade-up"><TwentyTwenty /></div>
      
      <div className="wrapper">
          <div className="paraText"  data-aos="fade-up"><TwentyTwentyOne /></div>
      </div> {/*end of wrapper */}
          <div className="paraText bgImgTwo"  data-aos="fade-up"><TwentyTwentyTwo /></div>
          <Footer />
      
       
    </div> 
  );
}

export default App;

