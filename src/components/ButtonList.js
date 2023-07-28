import React from 'react'
import Button from './Button'


//map function

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/> 
      <Button name="Gaming"/> 
      <Button name="Songs"/> 
      <Button name="Live"/> 
      <Button name="Soccer"/> 
      <Button name="Cricket"/> 
      <Button name="Cooking"/> 
      <Button name="News"/> 
      <Button name="Comedy"/> 
      <Button name="Technology"/> 
     
    </div>
  )
}

export default ButtonList