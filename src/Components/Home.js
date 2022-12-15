import React from 'react'
import hackathon from '../images/hometwo.png'
import navbar from '../images/navbar.png'

function Home() {
  return (
    <section  className='overflow-x-hidden' style={{ backgroundImage: `url(${hackathon})`,backgroundRepeat: 'no-repeat',
    backgroundSize:'100% 100%',height:'100vh', backgroundPosition: 'center',width:'99vw',overflowX:'hidden'
    }}>
       </section>
  )
}

export default Home
