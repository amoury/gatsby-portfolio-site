import React from 'react';
import TechTag from './Tech_Tag';
import styles from './styles/technical_section.module.css';

const TechnicalSection = (props) => {
  const frontEnd = ['Javascript', 'React', 'Redux', 'VueJS', 'Gulp', 'Angular', 'jQuery', 'Jade / Pug', 'Webpack', 'SASS']
  const backEnd = ['NodeJS', 'PHP', 'C', 'MongoDB', 'MySQL', 'Firebase'];

  const frontEndStack = frontEnd.map( tech => <TechTag key={tech}>{tech}</TechTag> );
  const backEndStack = backEnd.map( tech => <TechTag key={tech}>{tech}</TechTag> );

  return (
    <section className={styles.Section}>
      <h2 className={styles.Section_Title}>Technical Skills</h2>
      <div className={styles.SubSection}>
        <h3 className={styles.Section_SubTitle}>Frontend Technologies</h3>
        <div className={styles.Tech_Stack + " row"}>
          { frontEndStack }
        </div>
      </div>

      <div className={styles.SubSection}>
        <h3 className={styles.Section_SubTitle}>Backend Technologies</h3>
        <div className={styles.Tech_Stack + " row"}>
          { backEndStack }
        </div>
      </div>
    </section>

  );
};

export default TechnicalSection;