import { Link } from "react-router-dom";
import Search from "../search/search";
import { AppState, Category, Groups, NavItems, Users } from "../../../../data/model";


  export default function Header(heading: AppState<Users, Groups, NavItems, Category>) {
  return (
    <div className="">
      <div className="container mx-auto flex py-3 md:sm:justify-items-center sm:md:items-center sm:md:justify-center">
        <div className="flex  gap-8 md:basis-3/4 lg:basis-3/4 content-center items-center justify-start">
          <h1 className='text-1xl font-bold text-purple-600'>
            <Link to={`${'\/'}`}>Lance-work</Link>
            </h1>
          <nav className='hidden lg:flex lg:gap-8 lg:item-center lg:text-sm lg:block'>
            {heading.heading && heading.heading.map((nav, i) => i <= 3 ? <div className='' key={nav.id}>
            <Link to={`${nav.link}`}>{nav.title}</Link>
            </div> : "")}
          </nav>
        </div>
        <div className="flex  gap-8 md:lg:basis-2/4 content-center items-center justify-end text-sm">
          {/* <div className="flex place-content-end items-center text-sm"> */}
            <Search />
            <div className="" key={`${heading.heading &&  heading.heading[4].id}`}>
                <Link to={`/signup`}> {heading.heading &&  heading.heading[4].title} </Link>
                </div>
            <span className="material-symbols-outlined">menu</span>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
