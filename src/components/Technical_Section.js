import React from 'react';
import Tech_Tag from './Tech_Tag';
import styles from './styles/technical_section.module.css';

const TechnicalSection = (props) => {
  const frontEnd = ['Javascript', 'React', 'Redux', 'VueJS', 'Gulp', 'Angular', 'jQuery', 'Jade / Pug', 'Webpack', 'SASS']
  const backEnd = ['NodeJS', 'PHP', 'C', 'MongoDB', 'MySQL', 'Firebase'];

  
  return (
    <section className={styles.Section}>
      <h2 className={styles.Section_Title}>Technical Skills</h2>
      <div className={styles.SubSection}>
        <h3 className={styles.Section_SubTitle}>Frontend Technologies</h3>
        <div className={styles.Tech_Stack + " row"}>
          <Tech_Tag>Javascript</Tech_Tag>
          <Tech_Tag>React</Tech_Tag>
          <Tech_Tag>Redux</Tech_Tag>
          <Tech_Tag>Vue JS</Tech_Tag>
          <Tech_Tag>Vue JS</Tech_Tag>
          <Tech_Tag>Vue JS</Tech_Tag>
          <Tech_Tag>Vue JS</Tech_Tag>
          <Tech_Tag>Vue JS</Tech_Tag>
          <Tech_Tag>Vue JS</Tech_Tag>
        </div>
      </div>

      <div className={styles.SubSection}>
        <h3 className={styles.Section_SubTitle}>Backend Technologies</h3>
        <div className={styles.Tech_Stack + " row"}>
          <Tech_Tag>MongoDB</Tech_Tag>
          <Tech_Tag>NodeJS</Tech_Tag>
          <Tech_Tag>PHP</Tech_Tag>
          <Tech_Tag>Vue JS</Tech_Tag>
          <Tech_Tag>C</Tech_Tag>
          <Tech_Tag>Firebase</Tech_Tag>
          <Tech_Tag>MySQL</Tech_Tag>
        </div>
      </div>
    </section>

  );
};

export default TechnicalSection;