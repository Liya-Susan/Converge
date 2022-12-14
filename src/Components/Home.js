import React from 'react'
import hackathon from '../images/hometwo.png'
import navbar from '../images/navbar.png'
import Radium, { StyleRoot } from 'radium';
import home from '../images/home.png'


function Home(){
  const style={ backgroundImage: `url(${hackathon})`,backgroundRepeat: 'no-repeat',
  backgroundSize:'100% 100%',height:'100vh', backgroundPosition: 'center',width:'100vw',overflowX:'hidden','@media  (max-width:600px)':{
    backgroundImage: `url(${home})`,height:'80vh'
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
