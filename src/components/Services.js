import React, { Component } from 'react'
import "../Style/services.scss"
import Image from "../Image/box.gif"
import { BsArrowRight } from 'react-icons/bs';
import WOW from 'wowjs'

 class Services extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="services">
                <div className="title">
                    <img src={Image} alt="" className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s"/>
                    <h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">our services</h1>
                </div>

                <div className="img-box">
                    <div className="box-1">
                        <h3>styling</h3>
                        <div className="line"></div>
                        <p>Styling is a priority for Stylepoint! Get to know everything about it...</p>
                        <BsArrowRight className="icon-arrow "/>                      
                    </div>

                    <div className="box-2">
                        <h3>photoshoot</h3>
                        <div className="line"></div>
                        <p>Amazed by Vogue and ELLE photo shoots? We'll do one for you!</p>
                        <BsArrowRight className="icon-arrow wow fadeInLeft"/>                      
                    </div>

                    <div className="box-3">
                        <h3>make up</h3>
                        <div className="line"></div>
                        <p>Wake up and make up! Or our specialists will take care of it...</p>
                        <BsArrowRight className="icon-arrow wow fadeInLeft"/>                      
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
