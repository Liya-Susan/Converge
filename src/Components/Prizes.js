import React from 'react'
import prizes from '../images/prizes.png'
import first from '../images/first.jpg'
import second from '../images/second.jpg'
import third from '../images/third.jpg'
import Radium, { StyleRoot } from 'radium';



function Prizes() {
  const styleone={borderRadius:'45% ',padding:'0 10%',backgroundColor:'white',fontSize:'10px', width:'100px',height:'110px','@media  (max-width:400px)':{
     width:'70px',height:'80px'
  }}
  const styletwo={borderRadius:'45% ',padding:'0 4%',backgroundColor:'white',fontSize:'10px', width:'100px',height:'110px','@media  (max-width:400px)':{
    width:'70px',height:'80px'
 }}
 const stylethree={borderRadius:'45% ',padding:'0 10%',backgroundColor:'white',fontSize:'10px',width:'110px',height:'110px','@media  (max-width:400px)':{
  width:'80px',height:'80px'
}}
  const style={backgroundColor:'#000033',color:'white',padding:'1%','@media  (max-width:400px)':{
   
  }}
  return (
    
    
    <section class=" mt-5" id="prizes"  style={style}>    
     <div class="container">
      <div class="row text-center text-align-center align-items-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 style={{margin:'50px'}} >Prizes</h3>
         </div>
         
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
           
          </div>
          <button style={{borderRadius:'50% '}}> <img src={first} style={styleone}></img> </button>
          <h4 class="font-weight-bold dark-grey-text mt-4">First Prize</h4>
          <h6 class="font-weight-bold blue-text my-3">6000/-</h6>
          
        </div>
      </div>
 
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
           
          </div>
          <button style={{borderRadius:'50% '}}> <img src={second} style={styletwo}></img> </button>
          <h4 class="font-weight-bold dark-grey-text mt-4">Second Prize</h4>
          <h6 class="font-weight-bold blue-text my-3">4000/-</h6>
         
        </div>
 
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
           
          </div>
          <button style={{borderRadius:'50% ',backgroundColor:'#000033'}}> <img src={third} style={stylethree}></img> </button>
          <h4 class="font-weight-bold dark-grey-text mt-4">Third Prize</h4>
          <h6 class="font-weight-bold blue-text my-3">3000/-</h6>
          
        </div>
        </div>
      </div>
    </div> 
   </section> 

    
        
      


  )
}

export default Radium(Prizes)
