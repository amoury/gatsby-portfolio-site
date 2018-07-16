import React, { Component } from 'react';
import Primary_Button from './Primary_Button';
import styles from './styles/about_section.module.css';


class AboutSection extends Component {
  state = {
    expand: false
  }

  expandAboutHandler = () => {
    console.log('clicked');
    if(!this.state.expand) {
      this.setState({ expand: true })
    } else {
      this.setState({ expand: false })
    }
  }

  render () {
    return (
      <section className={styles.About_Section}>
        <h2 className={styles.Section_Title}>About</h2>
        <div className={this.state.expand ? `${styles.About_TextBox} ${styles.Expand}` : styles.About_TextBox}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus rem amet consectetur quisquam corrupti atque dolore, quia beatae eligendi? Totam, sit. Sequi iusto est similique sit exercitationem eligendi ipsa atque.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus rem amet consectetur quisquam corrupti atque dolore, quia beatae eligendi? Totam, sit. Sequi iusto est similique sit exercitationem eligendi ipsa atque.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus rem amet consectetur quisquam corrupti atque dolore, quia beatae eligendi? Totam, sit. Sequi iusto est similique sit exercitationem eligendi ipsa atque.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus rem amet consectetur quisquam corrupti atque dolore, quia beatae eligendi? Totam, sit. Sequi iusto est similique sit exercitationem eligendi ipsa atque.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus rem amet consectetur quisquam corrupti atque dolore, quia beatae eligendi? Totam, sit. Sequi iusto est similique sit exercitationem eligendi ipsa atque.</p>
        </div>
        <Primary_Button clicked={this.expandAboutHandler}>More + </Primary_Button>
      </section>
    );
  }
}

export default AboutSection;