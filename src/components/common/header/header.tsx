import { Link } from "react-router-dom";
import Search from "../search/search";
import { AppState, Category, Groups, NavItems, Users } from "../../../data/model";
import Navigation from "../navigation/navigation";
import { useState } from "react";

export default function Header(heading: AppState<Users, Groups, NavItems, Category>) {
  const collapseMenu: boolean = false;
  const [menuStatus, setMenuStatus] = useState(collapseMenu);

  return (
    <div className="">
      <div className="container mx-auto h-20 flex px-5 lg:px-0 md:sm:justify-items-center sm:md:items-center sm:md:justify-center">
        <div className="flex flex-auto gap-8 content-center items-center justify-start">
          <h1 className='text-1xl font-bold text-purple-600 text-nowrap'>
            <Link to={`${'\/'}`}>Lance-work</Link>
          </h1>
          <Navigation 
          heading={heading} 
          menuStatus={menuStatus} 
          setMenuStatus={setMenuStatus}
          ></Navigation>
        </div>
        <div className="flex gap-8 content-center items-center justify-end text-sm">
          <div className="" key={`${heading.heading && heading.heading[4].id}`}>
            <Link to={`/signup`} className="text-nowrap"> {heading.heading && heading.heading[4].title}</Link>
          </div>
          <span className="material-symbols-outlined" onMouseOver={()=>{setMenuStatus(true)}}>menu</span>
        </div>
        
      </div>
    </div>
  );
}
