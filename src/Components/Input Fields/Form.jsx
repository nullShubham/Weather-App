import React from 'react'
import Country from './Country'
import City from './City'
const Form = () => {
  return (
    <div className='bg-white min-h-fit flex justify-between flex-wrap max-w-[700px] gap-7 mb-2'>
      <Country />
      <City />
    </div>
  )
}

export default Form