import React from 'react';

const Primary_Button = (props) => {
  const style = {
    backgroundColor: '#4CFF00',
    border: 'none',
    marginTop: '20px'
  }

  return (
    <button style={style} onClick={props.clicked}>{props.children}</button>
  )
};

export default Primary_Button;