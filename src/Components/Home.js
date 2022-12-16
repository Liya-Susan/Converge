import React from 'react'
import hackathon from '../images/hometwo.png'
import navbar from '../images/navbar.png'
import Radium, { StyleRoot } from 'radium';
import home from '../images/home.png'


function Home(){
  const style={ backgroundImage: `url(${hackathon})`,backgroundRepeat: 'no-repeat',
  backgroundSize:'100% 100%',height:'100vh', backgroundPosition: 'center',width:'98.7vw',overflowX:'hidden','@media  (max-width:400px)':{
    backgroundImage: `url(${home})`
  }
  }
  return (
    <StyleRoot>

    <section  className='overflow-x-hidden' style={style}>
       </section>
    </StyleRoot>
  )
}

export default Radium(Home)
