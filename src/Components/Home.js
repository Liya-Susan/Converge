import React from 'react'
import hackathon from '../images/home.png'
import navbar from '../images/navbar.png'

function Home() {
  return (
    <section className=" text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start pb-5 home" style={{ backgroundImage: `url(${hackathon})`,backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',height:'100vh', backgroundPosition: 'center'
    }}>
       </section>
  )
}

export default Home
