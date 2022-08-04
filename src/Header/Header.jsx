import React from 'react'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import './Header.css'
function Header() {
  return (
    <>
    <div className='choose'>
    <h4>Why Choose Us</h4>
    <div className="section">
    <span className='item'><div className="logo-back"><img src={img1} alt="Image" /></div><h6>Expert Service</h6></span>
    <span className='item'><div className="logo-back"><img src={img2} alt="Image" /></div><h6>Support</h6></span>
    <span className='item'><div className="logo-back"><img src={img3} alt="Image" /></div><h6>Repaur</h6></span>
    <span className='item'><div className="logo-back"><img src={img4} alt="Image" /></div><h6>Safety</h6></span>

        
    </div>
    </div>
    </>
  )
}

export default Header