import React from 'react'
import navbar from '../images/navbar.png'
import Navbar from './Navbar'
import {Link} from 'react-scroll';
import mbcet from '../images/mbcet.png';
import iedc from '../images/iedc.png';
import Radium, { StyleRoot } from 'radium';


function Header() {
  const style={'@media  (max-width:400px)':{
    display:'none',visibility:'hidden'
  }}
  return (
    <section class="navbar-dark header navbar-fixed" style={{backgroundColor:'#000033'}}>
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
            <Link to='main' className='logo' style={style} >
            <img src={mbcet} alt='logo' style={{height:'50px',marginRight:'50px'}}/>
        </Link>
             
 
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link " href="#about">About<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#regterms">Terms<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link" href="#regguid">Guildelines<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#prizes">Prizes<span class="sr-only">(current)</span></a>
                  </li>
                </ul>
                 
              </div>
              <Link to='main' className='logo' >
            <img src={iedc} alt='logo' style={{height:'50px',marginRight:'50px'}}/>
        </Link>
             </nav>
            </div>
          </div>
        </div>
    </section> 
    
  )
}

export default Radium(Header)
