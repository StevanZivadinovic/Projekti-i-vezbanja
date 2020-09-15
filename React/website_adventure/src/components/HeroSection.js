import React from 'react'
import { Button } from './button';
import video1 from "./videos/video-2.mp4";
import './HeroSection.css'

import '../App'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video1} autoPlay loop muted/>
            <h1>ADWENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
              <p>text1</p>
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn-large'>
                    GET STARTED
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn-large'>
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
