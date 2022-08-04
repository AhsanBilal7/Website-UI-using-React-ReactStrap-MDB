import React from 'react'
import './Gallery.css'
function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   function Gallery() {
    const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
    console.log(images);
  return (
    <>
<h2 style={{marginTop:"20px"}}>Gallery</h2>
    <div className='grid-container'>
        <div className='grid-item'><img src={images['1.png']} alt="" /> </div>
        <div className='grid-item'><img src={images['2.png']} alt="" /></div>
        <div className='grid-item'><img src={images['3.png']} alt="" /></div>
    </div>
    <div className='grid-container2'>
        <div className='grid-item'><img src={images['4.png']} alt="" /> </div>
        <div className='grid-item'><img src={images['5.png']} alt="" /></div>
        <div className='grid-item'><img src={images['6.png']} alt="" /></div>
    </div>
    </>
  )
}

export default Gallery