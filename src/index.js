import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "./index.scss"
import Header from './components/Header'
import Section from './components/Section'
import Services from './components/Services'
import Projects from './components/Projects'
import Experts from './components/Experts'
import Slider from './components/Slider'


const root = document.getElementById('root')

class Index extends Component {
    render() {
        return (
            <div >
                <Header/>
                <Section/>
                <Services/>
                <Projects/>
                <Experts/>
                <Slider/>
            </div>
        )
    }
}

export default Index;

ReactDOM.render(<Index/>,root)
