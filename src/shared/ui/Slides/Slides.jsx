import React, { useEffect, useState } from 'react'
import './Slides.scss'
import Slide from './Slide/Slide'
import SlideOne from './SlideOne/SlideOne'
import SlideTwo from './SlideTwo/SlideTwo'
import SlideThree from './SlideThree/SlideThree'
import SlideFour from './SlideFour/SlideFour'
import SlideFive from './SlideFive/SlideFive'

const slides = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive]

const Slides = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [current, setCurrent] = useState()

	const nextSlide = () => {
		setCurrentIndex(prev => {
			if (prev >= slides.length - 1) {
				return 0;
			}
			return prev + 1;
		});
	}
	const prevSlide = () => {
		setCurrentIndex(prev => {
			if (prev === 0) {
				return slides.length - 1;
			}
			return prev - 1;
		});
	}

	useEffect(() => {
		setCurrent(slides.find((item, index) => index === currentIndex ))
	}, [currentIndex])

  return (
    <div className='slides'>
      <div>
        <ul className='slides__wrapper'>
					{slides.map((item, index) => 
					<Slide key={index}>	
						{current}
					</Slide>
					)}
				</ul>
			</div>
			<div className='buttons'>
				<button className='button button__prev' onClick={() => prevSlide()}>{'<<'}</button>
				<button className='button button__next' onClick={() => nextSlide()}>{'>>'}</button>
				</div>
    </div>
  )
}

export default Slides