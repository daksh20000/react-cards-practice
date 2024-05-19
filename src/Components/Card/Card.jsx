import React from 'react'
import './Card.css'

function Card(props) {
    const {name, img, rating, age} = props;

  return (
    <div className='card'>
      <div className='image'>
        <img src={img} alt="hmmm photu" />
      </div>
      <div className='content'>
        <p className='title' >{name}</p>
        <div className='stats'>
            <p >Age: {age}</p>
            <p className='rating'>Rating : {rating}*</p>
        </div>
      </div>
    </div>
  )
}

export default Card
