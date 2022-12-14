import React from 'react'
import footer from '../images/footer.png'
function Footer() {
  return (
    <div>
      <footer className=" text-white text-center position-relative " style={{backgroundColor:'#000033'}}>
        <div >
        <img src={footer} style={{width:'100vw'}}></img>

        </div>
    </footer>
    </div>
  )
}

export default Footer
