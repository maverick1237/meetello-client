
import React from 'react'
import Button from './Button'

function HeadTile({title, className , onClick}) {
  return (
    <div className='flex items-center justify-between  m-8'>
        <h1 className={`text-2xl text-black font-semibold text-pretty leading-tight text-justify  ${className}`}>{title}</h1>
        <Button text='Create Room' className='ml-2 rounded-xl' onClick={onClick}  />
        
    </div>
  )
}

export default HeadTile