
import React from 'react'

export default function JobForm() {
  return (
    <section className='pt-24 space-y-8'>
      <h2>Tell us about job reference.</h2>
      <div className='flex gap-4 content-start'>
        <div className=' space-y-8'>
          <p><label htmlFor="jobrole" className=''>Job Role: </label> </p>
          <p><label htmlFor="jobrole" className=''>Category: </label></p>
          <p><label htmlFor="jobrole" className=''>Skill: </label></p>
          <p><label htmlFor="jobrole" className=''>Description: </label></p>
        </div>
        <div  className='space-y-8'>
          <p><input type='text' id='jobrole' name='jobrole' className='border-b-2 focus-visible:border-purple-300 focus:outline-none' /></p>
          <p><input type='text' id='category' name='category' className='border-b-2 focus-visible:border-purple-300 focus:outline-none' /></p>
          <p><input type='text' id='skill' name='skill' className='border-b-2 focus-visible:border-purple-300 focus:outline-none' /></p>
          <p><textarea id='description' name='description' className='border-b-2 focus-visible:border-purple-300 focus:outline-none'></textarea></p>
          <p><button className='p-2 px-8 text-1xl mr-5 bg-amber-600 text-white'>Submit</button></p>
        </div>
      </div>
    </section>
  )
}
