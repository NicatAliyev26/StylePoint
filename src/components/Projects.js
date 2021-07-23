import React, { Component, useState, useEffect } from 'react'
import "../Style/projects.scss"
import Image from "../Image/box.gif"
import Image2 from "../Image/next.jpg"
import { BsArrowRight } from 'react-icons/bs';
import WOW from 'wowjs'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
          currentImage: 0,
          images: [
            "https://static.ucraft.net/fs/ucraft/userFiles/preview-stylepoint/images/341-328-lydz-leow-1126805-unsplash.jpg?v=1582121778",
            "https://static.ucraft.net/fs/ucraft/userFiles/preview-stylepoint/images/341-328-lydz-leow-1190336-unsplash.jpg?v=1582121778"
          ]
        };
      }
       

      switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
          this.setState({
            currentImage: this.state.currentImage + 1
          });

          console.log(this.setState.currentImage)
        } else {
          this.setState({
            currentImage: 0
          });
        }
        return this.currentImage;
      }
     
      componentDidMount() {
        setInterval(this.switchImage, 4000);
        new WOW.WOW().init();
      }
    render() { 
        return (
            <div className="projects">
                <div className="title">
                    <img src={Image} alt="" className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s" />
                    <h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">featured projects</h1>
                </div>

                <div className="pictures">
                    <div className="box-1" >
                       <img src={this.state.images[this.state.currentImage]} alt="" id="mainbox" className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s"/>
                    </div>
                    <div className="box-2">
                        <img src={Image2} alt="" className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s"/>
                        <p>photo</p>
                        <p className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">dallas girl</p>
                        <p>by Alex White</p>
                        <BsArrowRight className="arrow wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0s"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;




