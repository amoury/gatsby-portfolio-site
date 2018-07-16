import React from 'react';

const TechTag = (props) => {
  const style = {
    border: '1px solid #4CFF00',
    padding: '5px 10px',
    fontFamily: '"Inconsolata", monospace',
    background: '#4CFF00',
    margin: '3px',
    minWidth: '100px',
    textAlign: 'center'
  }

  return (<div style={style}>{props.children}</div>)
  
}

export default TechTag;