import React, { Component } from 'react'
import "../Style/header.scss"
import Image from "../Image/logo.png"
import { AiOutlineShopping } from 'react-icons/ai';
import { HiOutlineArrowDown } from 'react-icons/hi';
import Image1 from "../Image/toggle.png"
import WOW from 'wowjs'

export class Header extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="bg">
                <div className="sidemenu" id="menu">
           <a href="#">Home</a>
           <a href="#">Collection</a>
           <a href="#">About Us</a>
           <a href="#">Blog</a>
           <a href="#"  onClick={closeBtn} className="closebtn">&times;</a>
         </div>
                <div className="nav">
                    <div>
                    <img src={Image} className="logo" alt="wait,please" />
                    <img src={Image1} onClick={openBtn} className="burger" alt="wait,please" />
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <AiOutlineShopping className="icon"/>
                    </div>
                    
                </div>

                <div className="name" >
                    <h2 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">do you believe in style?</h2>
                </div>

                <div className="scroll-down">
                    <p className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">scroll down</p>
                    <a href="#section"><HiOutlineArrowDown className="icon-arrow wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s"/></a> 
                </div>

            </div>
        )
    }
}

export default Header



    function openBtn(){
           document.getElementById("menu").style.width = "100%"
    }
    function closeBtn(){
           document.getElementById("menu").style.width = "0%"
    }
