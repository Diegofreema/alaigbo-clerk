import React from 'react';
import NavLinks from './NavLinks';
const navLinks = [
  {
    title: 'ABSTRACT',
    link: '/abstract',
  },

  {
    title: 'EVENTS',
    link: '/event',
  },
  {
    title: 'EVENT BOOKING',
    link: '/booking',
  },
  {
    title: 'INVESTOR',
    link: '/investor',
  },
  {
    title: 'PROJECT',
    link: '/',
  },
  {
    title: 'DEPARTMENTS',
    link: '/department',
  },
  {
    title: 'CONTACT',
    link: '/contact',
  },
];
const Links = () => {
  return (
    <div className="menu-lg bg-[#373435] flex items-center flex-col justify-center h-screen absolute w-full top-0 -right-14 -translate-x-[50px] bottom-0">
      {navLinks.map((item, i) => (
        <NavLinks key={i} item={item} />
      ))}
    </div>
  );
};

export default Links;
