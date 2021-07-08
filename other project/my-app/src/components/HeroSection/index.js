import React,{useState} from 'react'
import { Button } from '../ButtonElement';
import {HeroContainer,HeroBg,VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight,GlobalStyles
}from './HeroElements'
import  video  from '../../videos/video.mp4'
function Hero() {

    const [hover,setHover]=useState(false);


    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="home" >
            <GlobalStyles/>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>virtual banking Made Easy </HeroH1>
                <HeroP>
                    sign up for a new accuont today and receive $250 in credits towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseLeave={onHover}
                    onMouseEnter={onHover}
                    primary='true'
                    dark='true'
                    >
                      Get started{hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
    
}
    

export default Hero