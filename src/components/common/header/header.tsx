import { Link } from "react-router-dom";
import Search from "../search/search";
import { AppState, Category, Groups, NavItems, Users } from "../../../data/model";
import Navigation from "../navigation/navigation";
import LevelTwoNavigation from "../navigation/level-two-navigation";


  export default function Header(heading: AppState<Users, Groups, NavItems, Category>) {
    return (
    <div className="">
      <div className="container mx-auto h-20 flex px-5 lg:px-0 md:sm:justify-items-center sm:md:items-center sm:md:justify-center">
        <div className="flex flex-auto gap-8  content-center items-center justify-start">
          <h1 className='text-1xl font-bold text-purple-600'>
            <Link to={`${'\/'}`}>Lance-work</Link>
            </h1>
            <Navigation heading={heading}>
              {/* <LevelTwoNavigation /> */}
            </Navigation>
        </div>
        <div className="flex  gap-8 content-center group items-center justify-end text-sm">
          {/* <div className="flex place-content-end items-center text-sm"> */}
            <Search />
            <div className="" key={`${heading.heading &&  heading.heading[4].id}`}>
                <Link to={`/signup`}> {heading.heading &&  heading.heading[4].title} </Link>
                </div>
            <span className="material-symbols-outlined hover:group-hover" >menu</span>
          {/* </div> */}
        <div className="w-full   invisible group-hover:visible">This sub navigationasjdlkajsldkalsjd asjdajsdl asdjlajsdl alsdjlasjdlk asdljalskjd</div>
        </div>
        
      </div>
    </div>
  );
}
