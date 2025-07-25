jsx
import React from 'react'
import { FaInfoCircle, FaPhone, FaQuestionCircle, FaShieldAlt } from 'react-icons/fa'

function SideBar() {
  return (
    <aside className="sidebar">
      <h2>Useful Links</h2>
      <ul className='list-item'>
        <li>
          <a href="/about"><FaInfoCircle className='sidebar-icon'/>About Us</a>
        </li>
        <li>
          <a href="/contact"><FaPhone className='sidebar-icon'/>Contact</a>
        </li>
        <li>
          <a href="#"><FaQuestionCircle className='sidebar-icon'/>FAQs</a>
        </li>
        <li>
          <a href="#"><FaShieldAlt className='sidebar-icon'/>Privacy Policy</a>
        </li>


      </ul>
    </aside>
  );
}

export default SideBar;