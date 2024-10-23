import React from 'react'

export default function SearchListing() {
  return (
   <>
     <div className='hover:bg-amber-50 '>
       <div className="w-full p-5">
         <h2 className='text-amber-600'>Sr. Software Engineer</h2>
         <p>HTMl, CSS, JAVASCRIPT, JAVA, NODE, PHP ...</p>
         <p>Having good knowledge of SDLC.</p>
       </div>
         <div className='gap-8 p-2 text-sm text-right'>
          <span className='pr-3'>ID: 0012</span>
          <span className='pr-3'>05/12/2024</span>
          <span className='pr-3'>Comments: </span>
          <span className='pr-3'>listed by:</span>
          <span className='pr-3'>views: </span>
         </div>
     </div>
   </>
  )
}
