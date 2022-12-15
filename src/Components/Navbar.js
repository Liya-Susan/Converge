import React from 'react'
import {Link} from 'react-scroll';
import mbcet from '../images/mbcet.png';
function Navbar() {
  return (
    <div>
      <nav style={{overflowX:'hidden'}}>
        <Link to='main' className='logo' >
            <img src={mbcet} alt='logo'/>
        </Link>
       
        <ul style={{listStyleType: 'none',
  margin: 0,
  padding: 0}}>
  <li style={{display:'inline'}}><a href="default.asp">Home</a></li>
  <li style={{display:'inline'}}><a href="news.asp">News</a></li>
  <li style={{display:'inline'}}><a href="contact.asp">Contact</a></li>
  <li style={{display:'inline'}}><a href="about.asp">About</a></li>
</ul>
      </nav>
      
    </div>
  )
}

export default Navbar
