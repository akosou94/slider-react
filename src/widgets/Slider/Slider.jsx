import React, { useEffect, useState } from 'react'
import SliderButtons from '../../features/SliderButtons/SliderButtons'
import './Slider.scss'


const Slider = ({ slidesArray, buttons, dotted }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slides, setCurrentSlides] = useState([])

  useEffect(() => {
    setCurrentSlides(slidesArray.map((item, index) => item()))
  }, [slidesArray])

  return (
    <div className='slider'>
      <div className='slides'>
        {slides.map(slide => (
          <div className='slides__slide' style={{ translate: `${-100 * currentIndex}%` }}>
            {slide}
          </div>
        ))}
      </div>
      <SliderButtons
        buttons={buttons}
        dotted={dotted}
        setCurrentIndex={setCurrentIndex}
        currentIndexDot={currentIndex}
        slides={slidesArray}
      />
    </div>
  )
}

export default Slider