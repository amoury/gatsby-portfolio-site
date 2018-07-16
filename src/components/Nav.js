import React from 'react';
import Link from 'gatsby-link';

const Nav = (props) => {

  const menuItems = [
    { id:"001", name: "Projects", url: "/projects" },
    { id:'002', name: 'About', url: '/about' },
    { id:'003', name: 'Blog', url: '/blog' }
  ]

  const links = menuItems.map( link => ( <Link className="menu-items" to={link.url} key={link.id}>{link.name}</Link> ));
  

  return (
    <div>
      { links }
    </div>
  )
};

export default Nav;