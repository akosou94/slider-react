import React, { useEffect, useState } from 'react'
import SlideFive from '../../shared/ui/Slides/SlideFive/SlideFive'
import SlideFour from '../../shared/ui/Slides/SlideFour/SlideFour'
import SlideOne from '../../shared/ui/Slides/SlideOne/SlideOne'
import SlideThree from '../../shared/ui/Slides/SlideThree/SlideThree'
import SlideTwo from '../../shared/ui/Slides/SlideTwo/SlideTwo'
import './Slider.scss'
import Circle from '../../shared/ui/Circle/Circle'
import CircleDot from '../../shared/ui/CircleDot/CircleDot'

const slidesArray = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive]

const Slider = () => {
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
          <div className='slides__slide' style={{ translate: `${-100 * currentIndex}%` }}>{slide}</div>
        ))}
      </div>
      <div className='buttons'>
        <button className='button button__prev' onClick={prevSlide}>{'<<'}</button>
        <button className='button button__next' onClick={nextSlide}>{'>>'}</button>
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