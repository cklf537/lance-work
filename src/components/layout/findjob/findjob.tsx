// import AdvancedSearch from "../../common/advance-search/advanced-search";
// import Search from "../../common/search/search";

import AdvancedSearch from "../../common/advance-search/advanced-search";

export default function FindJob() {
  return <>
    <div className="border lg:py-5">
      <section className="search-basic flex gap-4">
        <AdvancedSearch />
          {/* <label htmlFor="search">Search</label> */}
          {/* <Search data-id="search" /> */}
          {/* <button className="p-2 px-8 text-1xl bg-purple-600 text-white">Search</button> */}
      </section>
    </div>
  </>;
}
