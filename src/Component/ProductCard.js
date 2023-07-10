import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'


const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/collaboration/${item.id}`)
  }
  return (
    <div className='card' onClick={showDetail}>
      <img src={item.img}/>
      <div>{item.title}</div>
      <div>
        {item.color}
        {item.price}
      </div>
    </div>
  )
}

export default ProductCard