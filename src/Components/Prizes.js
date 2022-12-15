import React from 'react'
import prizes from '../images/prizes.png'
import imgtwo from '../images/imgtwo.svg'

function Prizes() {
  return (
    
    
    <section class=" mt-5" id="tourist"  style={{backgroundColor:'#000033',color:'white',padding:'1%'}}>    
     <div class="container">
      <div class="row text-center text-align-center align-items-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 style={{margin:'50px'}} >Prizes</h3>
         </div>
         
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
           
          </div>
          <button style={{borderRadius:'50% ',padding:'20px 30px'}}> 1 </button>
          <h4 class="font-weight-bold dark-grey-text mt-4">First Prize</h4>
          <h6 class="font-weight-bold blue-text my-3">6000/-</h6>
          
        </div>
      </div>
 
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
           
          </div>
          <button style={{borderRadius:'50% ',padding:'20px 30px'}}> 2 </button>
          <h4 class="font-weight-bold dark-grey-text mt-4">Second Prize</h4>
          <h6 class="font-weight-bold blue-text my-3">4000/-</h6>
         
        </div>
 
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
           
          </div>
          <button style={{borderRadius:'50% ',padding:'20px 30px'}}> 3 </button>
          <h4 class="font-weight-bold dark-grey-text mt-4">Third Prize</h4>
          <h6 class="font-weight-bold blue-text my-3">2000/-</h6>
          
        </div>
        </div>
      </div>
    </div> 
   </section> 

    
        
      


  )
}

export default Prizes
