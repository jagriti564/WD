import React from 'react'
import Card from './Card'

function Props() {
  return (
    <>
    <div className='flex justify-evenly items-center h-screen'>
    <Card name="Jagriti"/>
    <Card name="Sona" title="Hello I'm a Girl" btn="Click to view"/>
    </div>
    </>
  )
}

export default Props