import React, { Component } from 'react'
import "../Style/experts.scss"
import Image from "../Image/box.gif"
import Image1 from "../Image/profile-1.png"
import Image2 from "../Image/profile-2.png"
import Image3 from "../Image/profile-3.png"
import { FaLinkedinIn } from 'react-icons/fa';
import { RiPinterestFill } from 'react-icons/ri';
import { ImVimeo } from 'react-icons/im';
import { RiBehanceLine } from 'react-icons/ri';
import WOW from 'wowjs'


class Experts extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="ex">
                <div className="title">
                    <img src={Image} alt="" className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s" />
                    <h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">top experts</h1>
                </div>

                <div className="profile">
                    <Persons img={Image1}
                             name="Any Lynch"
                             job="MAKE UP ARTIST"
                             desc="Unique make up styles and looks are a matter of pleasure for our voguish master!"/>
                    <Persons img={Image2}
                             name="Nick Cave"
                             job="PHOTOGRAPHER"
                             desc="Lights, camera, action! Nick will capture the best moments during your photoshoot."/>
                    <Persons img={Image3}
                             name="Anna Ruso"
                             job="STYLIST"
                             desc="Classy young lady, or confident street style queen? Anna will choose the best outfit!"/>                    
                </div>
            </div>
        )
    }
}

export default Experts




 class Persons extends Component {
    render() {
        return (
            <div className="info wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">
                <img src={this.props.img} alt="" />
                    <h3>{this.props.name}</h3>
                    <p>{this.props.job}</p>
                    <p>{this.props.desc}</p>
                    <div className="icons">
                    <FaLinkedinIn className="icon"/>
                    <RiPinterestFill className="icon"/>
                    <ImVimeo className="icon"/>
                    <RiBehanceLine className="icon"/>
                    </div>
                    <button>discover</button>
            </div>
        )
    }
}


