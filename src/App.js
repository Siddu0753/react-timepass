
import './App.css';

import AboutUs from './components/aboutus/AboutUs.js';
import "./App.css";
import Header from "./components/header/header.js";
import MembersList from './components/memberslist/MembersList.js';
import Section from './components/section/Section.js';



function App() {
  return (
    <div>
      {/* <h1 className='head'>first batch is best batch</h1> */}

      <Header/>
      
      <div className="center-screen">
        <Section title="About us">
          <AboutUs/>
        </Section>
        <Section title="Members">
          <MembersList/>

        </Section>
        {/* <AboutUs/>
        <MembersList/> */}
      </div>
      
    </div>
  );
}

export default App;
