import React, { Component } from 'react'
import "../Style/slider.scss"
import Image from "../Image/box.gif"
import Image1 from "../Image/tshirt.jpg"
import Image2 from "../Image/shoes.jpg"
import Image3 from "../Image/sweatshirt.jpg"
import WOW from 'wowjs'


 class Slider extends Component {
  componentDidMount(){
    new WOW.WOW().init();
}
    render() {
        return (
            <div className="carousell">
                <div className="title">
                    <img src={Image} alt="" className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s"/>
                    <h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">get the look</h1>
                </div>

                <div className="slider">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                           <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="d-block w-100" alt="..."/>
                    </div>
                      <div className="carousel-item">
                         <img src={Image2} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                         <img src={Image3} className="d-block w-100" alt="..."/>
                      </div>
                  </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                   </a>
                   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                   </a>
                 </div>
                 </div>

                <button>shop now</button>

                <footer className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">
                  <ul className="social-media">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Instagram</a></li>
                  </ul>

                  <ul className="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Collection</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </footer>
            </div>
        )
    }
}

export default Slider
