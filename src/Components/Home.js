import React from 'react'
import hackathon from '../images/hackathon.png'

function Home() {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start mt-5 pb-5 home">
        <div className="container">
            <div className=" align-items-center justify-content-between">
                <div>
                    <h1> <span className="text-warning">Converge</span> </h1>
                    <h6 className="lead my-4">
                    a 24 hour hackathon
                    </h6>
                    <p>by Catalyst  Mar Baselios College of Engineering and Technology  IEDC </p>
                    <p>as a part of Innovators Premier League by Kerala start up mission.</p>
                   < p>The winners will be nominated for regional level   hackathon </p><p>conducted by kerala start up mission.</p> 
                    
                    <a href='https://rebrand.ly/hack-converge' className="btn btn-primary btn-lg mb-5">Register Now</a>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Home
