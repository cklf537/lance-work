
import React, { useState } from 'react'
import SearchListing from '../../../common/search-listing/searchlisting'
import SearchFilter from '../../../common/search-filter/searchfilter'
import HeroBanner from '../../../common/hero-banner/herobanner'
import BannerAd from '../../../common/banner/banner'
import ListDetails from '../../../common/listdetails/listdetails'
import './home.css'

export default function GlobalSearch() {
  const [name, setName] = useState<number[]>([1, 2, 3, 4,5,6,7]);
  return (
    <>
      <div className=" flex flex-row gap-12">
        <div className="flex-auto ">
          <HeroBanner />
          <BannerAd />
          <h2>Latest references:</h2>
          <div className='grid lg:grid-cols-2 '>
            <div className=' border-r  max-h-screen overflow-auto scrollable-div'>
            {
              name && name.map(n=><>{<SearchListing />}</>)
            }
            </div>
            <div className='hidden md:lg:block bg-amber-50'>
              <ListDetails />
            </div>
          </div>
          <HeroBanner />
        </div>
        <div className="hidden md:block basis-1/4 xl:block p-5 h-screen">
          <SearchFilter />
        </div>
      </div>
    </>

  )
}
