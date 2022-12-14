import React from 'react'
import prizes from '../images/prizes.png'

function Prizes() {
  return (
    <div style={{backgroundColor:'#000033',color:'white'}} className="d-sm-flex align-items-center justify-content-between p-5">
      <div><h1 >PRIZES</h1>
      
      
      <h3 style={{marginTop:'40px'}}>1st prize: Rs. 6000/-</h3>
      <h3>2nd prize: Rs. 4000/-</h3>
      <h3 style={{marginBottom:'60px'}}>3rd prize: Rs. 3000/-</h3></div> 
        
      

      <img src={prizes} className="img-fluid w-50 d-none d-sm-block"/>


    </div>
  )
}

export default Prizes
