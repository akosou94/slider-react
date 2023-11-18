import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
/* import BladeRunner from '../../shared/components/BladeRunner/BladeRunner'
import Brain from '../../shared/components/Brain/Brain'
import Man from '../../shared/components/Man/Man'
import SlideFive from '../../shared/components/Slides/SlideFive/SlideFive'
import SlideFour from '../../shared/components/Slides/SlideFour/SlideFour'
import SlideOne from '../../shared/components/Slides/SlideOne/SlideOne'
import SlideThree from '../../shared/components/Slides/SlideThree/SlideThree'
import SlideTwo from '../../shared/components/Slides/SlideTwo/SlideTwo'
import Video from '../../shared/components/Video/Video'
import VideoTwo from '../../shared/components/Video/VideoTwo/VideoTwo' */
import Circle from '../../shared/ui/Circle/Circle'
import CircleDot from '../../shared/ui/CircleDot/CircleDot'
import './Slider.scss'


const Slider = ({ slidesArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slides, setCurrentSlides] = useState([])


  const prevSlide = () => {
    setCurrentIndex(prev => {
      if (prev === 0) return slides.length - 1
      return prev - 1
    })
  }

  const nextSlide = () => {
    setCurrentIndex(prev => {
      if (prev === slides.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  useEffect(() => {
    setCurrentSlides(slidesArray.map((item, index) => item()))
  }, [])

  return (
    <div className='slider'>
      <div className='slides'>
        {slides.map(slide => (
          <div className='slides__slide' style={{ translate: `${-100 * currentIndex}%` }}>
            {slide}
          </div>
        ))}
      </div>
      <div className='buttons'>
        <button className='button button__prev' onClick={prevSlide}><FaArrowAltCircleLeft /></button>
        <button className='button button__next' onClick={nextSlide}><FaArrowAltCircleRight /></button>
      </div>
      <div className='slider__page-control'>
        {slides.map((_, index) => (
          <button className='slider__page-control-dot-btn' onClick={() => setCurrentIndex(index)}>{index === currentIndex ? <CircleDot /> : <Circle />}</button>
        ))}
      </div>
    </div>
  )
}

export default Slider