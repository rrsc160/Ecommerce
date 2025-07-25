jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { GiLoveLetter } from 'react-icons/gi'; // Example of a more love-related icon
import { MdOutlineFamilyRestroom, MdGroups } from 'react-icons/md';

function NavBar() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/"><AiFillHome className="nav-icon" /> Home</Link>
        </li>
        <li>
          <Link to="/brides"><MdGroups className="nav-icon" /> Brides</Link> {/* Couple icon */}
        </li>
        <li>
          <Link to="/grooms"><MdGroups className="nav-icon" /> Grooms</Link> {/* Couple icon */}
        </li>
        <li>
          <Link to="/divorcee"><GiLoveLetter className="nav-icon" /> Divorcee</Link> {/* Heart icon */}
        </li>
        <li>
          <Link to="/login"><AiOutlineUser className="nav-icon" /> Login</Link>
        </li>
        <li>
          <Link to="/register"><AiOutlineUser className="nav-icon" /> Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;