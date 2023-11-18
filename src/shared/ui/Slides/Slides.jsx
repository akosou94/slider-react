import React, { useEffect, useState } from 'react';
import './Slides.scss';


const Slides = ({ children, nextSlide, prevSlide }) => {
	console.log(children);
	/* 	const [currentIndex, setCurrentIndex] = useState(0)
		const [current, setCurrent] = useState()
	
		useEffect(() => {
			setCurrent(slides.find((item, index) => index === currentIndex))
		}, [currentIndex]) */

	return (
		<div className='slides'>
			<div className='slides__wrapper'>
				{children}
			</div>
			<div className='buttons'>
				<button className='button button__prev' onClick={prevSlide}>{'<<'}</button>
				<button className='button button__next' onClick={nextSlide}>{'>>'}</button>
			</div>
		</div>
	)
}

export default Slides