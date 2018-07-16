import React from 'react';
import ProfileBoxStyle from './styles/profile_box.module.css';

const Profile_Box = (props) => {
  return (
    <div className={ProfileBoxStyle.Profile_Box}>
      <div className={ProfileBoxStyle.Profile_Image}></div>
      <div className={ProfileBoxStyle.Profile_Details}>
        <div><p>Amoury</p></div>
        <div><p><span>/</span></p></div>
        <div><p><span>Ansar Memon</span></p></div>
        <div className={ProfileBoxStyle.Small_Hr}></div>
        <div className={ProfileBoxStyle.Profile_Job}>
          <p className={ProfileBoxStyle.Highlight}>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  )
};

export default Profile_Box;