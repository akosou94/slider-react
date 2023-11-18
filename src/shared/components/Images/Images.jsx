import React from 'react'
import './Images.scss'
import { imagesArray } from '../../../entities/Images/images'

const Images = () => {
  return (
    <div className='images'>
      {imagesArray.map(({ src, alt }) => (
        <img className='images-item' src={src} alt={alt} />
      ))}
    </div>
  )
}

export default Images