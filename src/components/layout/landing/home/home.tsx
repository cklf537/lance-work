
import BrandHero from '../../../branding/brand-hero/brand-hero'
import HeroBanner from '../../../branding/hero-banner/herobanner'
import FeaturedList from '../../../common/featured-list/featured-list'
import SearchListing from '../../../common/search-listing/searchlisting'
import Search from '../../../common/search/search'


export default function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedList />
      <Search />
      <SearchListing />
    </div>
  )
}
