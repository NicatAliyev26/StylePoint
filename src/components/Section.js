import React, { Component } from 'react'
import "../Style/section.scss"
import Image from "../Image/box.gif"
import WOW from 'wowjs'

 class Section extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="main-part" id="section">
                <div className="animation-box">
                    <img src={Image} alt="" className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s" />
                </div>
                <div className="sentences">
                    <h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">who we are</h1>
                    <p className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">Stylepont is a team of enthusiastic stylists, photographers, 
                        and make-up artists that will create a brand new total look for you! Classic or street style, 
                        casual or evening: we'll dress you up and make you up so that you are ready for the photoshoot of the year! 
                        Be stylish, be unique with Stylepont!</p>
                        <button className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">read more</button>
                </div>
            </div>
        )
    }
}

export default Section;
