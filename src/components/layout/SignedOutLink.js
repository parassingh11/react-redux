import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
  return (
   <ul className="left">     
     <li><NavLink to='/'>sign up</NavLink></li>
     <li><NavLink to='/'>log In</NavLink></li>     
   </ul>
  )
}

export default SignedOutLink;
