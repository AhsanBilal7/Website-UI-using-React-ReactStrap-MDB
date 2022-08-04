import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonial.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
export default class Testimonials extends Component {
  render() {
    return (
    //   <Carousel
    //     showArrows={true}
    //     infiniteLoop={true}
    //     showThumbs={false}
    //     showStatus={false}
    //     autoPlay={true}
    //     interval={6100}
    //   >
    <>
<h2>Testimonials</h2>
    <div className="top">
        <div>
        
          <img src={img1} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={img2} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={img3} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
    {/* //   </Carousel> */}
    </div>
    </>
    );
  }
}