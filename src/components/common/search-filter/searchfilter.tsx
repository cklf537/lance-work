
import React, { useContext } from 'react'
import { AppContext } from '../../../data/context'
import { AppState, Category, Users, Groups, NavItems } from '../../../data/model';

export default function SearchFilter() {

  const searchTag = useContext<AppState<Users, Groups, NavItems, Category>>(AppContext);

  return (
    <>
    <section className='w-full space-y-4'>
        <h2>Explore References:</h2>
        <input type='text' className='border-b-2 focus-visible:border-purple-300 focus:outline-none' placeholder='ex: UI Design'/>
        <h2 className='pt-6'>Subject Area:</h2>
        <div className='flex flex-wrap gap-4'>
          {
          searchTag && searchTag.category?.map(item=>
          <p className='felx bg-amber-400 px-4' key={item.categor_id}>{item.name}</p>)
          }
        </div>
    </section>
    </>
  )
}
