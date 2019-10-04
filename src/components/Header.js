import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul className='header'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard (private page with login only)</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/someWhere'>Invalid page</Link>
        </li>
      </ul>
    </header>
  );
}
