import { Link } from "react-router-dom";
import Search from "../search/search";
import { AppState, Category, Groups, NavItems, Users } from "../../../../data/model";


  export default function Header(heading: AppState<Users, Groups, NavItems, Category>) {
  return (
    <div className="w-full border">
      <div className="container mx-auto flex flex-row">
        <div className="flex w-full md:basis-3/4 lg:basis-3/4 p-4 pl-5 lg:pl-0 lg:pt-6">
          <h1 className='text-1xl font-bold pr-5 text-purple-600'>
            <Link to={`${'\/'}`}>Lance-work</Link>
            </h1>
          <nav className='hidden lg:flex lg:item-center lg:text-sm lg:block'>
            {heading.heading && heading.heading.map((nav, i) => i <= 3 ? <div className='px-5' key={nav.id}>
            <Link to={`${nav.link}`}>{nav.title}</Link>
            </div> : "")}
          </nav>
        </div>
        <div className="w-full hidden lg:block md:block basis-2/4 p-4 items-end">
          <div className="flex place-content-end items-center text-sm">
            <Search />
            <div className='px-5' key={`${heading.heading &&  heading.heading[4].id}`}>
                <Link to={`/signup`}> {heading.heading &&  heading.heading[4].title} </Link>
                </div>
            <div></div>
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
