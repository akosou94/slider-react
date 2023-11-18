import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import Circle from '../../shared/ui/Circle/Circle'
import CircleDot from '../../shared/ui/CircleDot/CircleDot'
import './SliderButtons.scss'

const SliderButtons = ({ slides, currentIndexDot, setCurrentIndex, buttons, dotted }) => {
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0)

  const prevSlide = () => {
    setCurrentIndexSlide(prev => {
      if (prev === 0) return slides.length - 1
      return prev - 1
    })
  }

  const nextSlide = () => {
    setCurrentIndexSlide(prev => {
      if (prev === slides.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  useEffect(() => {
    setCurrentIndex(currentIndexSlide)
  }, [currentIndexSlide, setCurrentIndex])

  return (
    <>
      {buttons &&
        <div className='buttons'>
          <button className='button button__prev' onClick={prevSlide}><FaArrowAltCircleLeft /></button>
          <button className='button button__next' onClick={nextSlide}><FaArrowAltCircleRight /></button>
        </div>
      }
      {dotted &&
        <div className='buttons__page-control'>
          {slides.map((_, index) => (
            <button className='buttons__page-control-dot-btn' onClick={() => setCurrentIndex(index)}>{index === currentIndexDot ? <CircleDot /> : <Circle />}</button>
          ))}
        </div>
      }
    </>
  )
}

export default SliderButtons