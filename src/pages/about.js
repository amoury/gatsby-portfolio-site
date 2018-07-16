import React from 'react';
import Profile_Box from '../components/Profile_Box';
import styles from './styles/about.module.css';
import AboutSection from '../components/About_Section';
import TechnicalSection from '../components/Technical_Section';

const About = (props) => {
  return (
    <div className={"row"}>

      <div className="four columns">
        <Profile_Box />
      </div>

      <div className={"seven columns"}>
        <div className={styles.Description_Box}>
          <AboutSection />
          <TechnicalSection />

        
        </div>
      </div>
    </div>
  )
};

export default About;