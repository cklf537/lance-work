import { Link, NavLink } from "react-router-dom";

export default function FeaturedList() {
  const initial: number[] = [1, 2, 3, 4];
  return (
    <>
      <h2 className="py-5 text-center lg:text-start">Latest Listings: </h2>
      <div className="grid md:lg:grid-cols-4 grid-cols-1 gap-8">
        {initial && initial.map((item, i) =>
          <div className=" p-5 pb-0 pr-0 gap-4" key={i}>
            <NavLink to={`/`}><h2>Sr. Software Engineer</h2></NavLink>
            <p className="truncate">HTMl, CSS, JAVASCRIPT, JAVA, NODE, PHP ...</p>
            <p>Having good knowledge of SDLC.</p>
            <div className="flex flex-row justify-end mt-5 gap-4">
              <div className="flex p-2 ">
              </div>
              <div className="flex p-2 gap-3 bg-purple-600 rounded-tl-lg text-white">
              <p>User1</p>
                <div className="flex flex-row">
                  <span className="material-symbols-outlined pr-1">
                    visibility
                  </span>
                  <p>214</p>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="grid grid-cols-4 gap-8 ">
        <div className="border p-5 pb-0 pr-0 gap-4">
          <h2>Sr. Software Engineer</h2>
          <p>HTMl, CSS, JAVASCRIPT, JAVA, NODE, PHP ...</p>
          <p>Having good knowledge of SDLC.</p>
          <div className="flex flex-row justify-end mt-5 gap-4">
            <div className="flex p-2">posted: today</div>
            <div className="flex p-2 bg-purple-600 rounded-tl-lg text-white">views: 214</div>
          </div>
        </div> 
      </div> */}
    </>
  )
}
