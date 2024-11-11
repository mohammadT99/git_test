import React from 'react'
import './style.scss'

function CardBox({name , href }) {
  return (
    <a href={href} className='card_box'>
         <p>{name}</p>
    </a>
  )
}

export default CardBox