import { Dispatch, ReactNode, SetStateAction } from "react";
import { AppState, Category, Groups, NavItems, Users } from "../../../data/model";
import { Link } from "react-router-dom";

export interface Props {
  children?: ReactNode;
  heading: AppState<Users, Groups, NavItems, Category>;
  menuStatus: boolean;
  setMenuStatus: Dispatch<SetStateAction<boolean>>
};

export default function Navigation({children, heading, menuStatus, setMenuStatus}: Props) {
  return (
    <div className="">
        <nav className='hidden lg:flex lg:gap-8 lg:item-center lg:text-sm lg:block'>
            {heading.heading && heading.heading.map((nav, i) => i <= 3 ? <div className='' key={nav.id}>
            <Link to={`${nav.link}`} onMouseOver={()=>{setMenuStatus(true)}}>{nav.title}</Link>
            </div> : "")}
          </nav>
          <section className={`border bg-white p-5 w-full absolute h-96 top-24 left-0 ${menuStatus == false ? `invisible` : `visible`}`} 
          onMouseOver={()=>{setMenuStatus(true)}} 
          onMouseOut={()=>{setMenuStatus(false)}} >
            <div className="container mx-auto">
            <div>Level 2.1</div>
            <div>Level 2.1</div>
            <div>Level 2.1</div>
            <div>Level 2.1</div>
            <div>Level 2.1</div>
            </div>
          </section>
        {children && children}
    </div>
  )
}
