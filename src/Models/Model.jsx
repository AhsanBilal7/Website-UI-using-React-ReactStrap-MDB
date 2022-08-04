import React from 'react'
import './Model.css'
import cycle from './1.svg'
import cycle2 from './2.svg'
import cycle3 from './3.svg'
function Model() {
  return (
    <>
<h3>Model</h3>
    <div className='cycle'>
    <div className='left'>
        <img src= {cycle} alt="" />
    </div>
    <div className='right'>
        <h2>Desert Queen</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis condimentum tellus quis. Adipiscing odio tellus pretium justo. Elit non pretium etiam ut consequat purus. Bibendum purus donec dolor pretium quis.Adipiscing odio tellus pretium justo. Elit </p>
        <button>Learn More</button>
    </div>
    </div>
    <div className='cycle'>
    <div className='right'>
        <h2>The All Rounder</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis condimentum tellus quis. Adipiscing odio tellus pretium justo. Elit non pretium etiam ut consequat purus. Bibendum purus donec dolor pretium quis.Adipiscing odio tellus pretium justo. Elit </p>
        <button>Learn More</button>
    </div>
    <div className='left'>
        <img src= {cycle2} alt="" />
    </div>
    </div>
    <div className='cycle'>
    <div className='left'>
        <img src= {cycle3} alt="" />
    </div>
    <div className='right'>
        <h2>Forest King</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis condimentum tellus quis. Adipiscing odio tellus pretium justo. Elit non pretium etiam ut consequat purus. Bibendum purus donec dolor pretium quis.Adipiscing odio tellus pretium justo. Elit </p>
        <button>Learn More</button>
    </div>
    </div>
    </>
  )
}

export default Model