import { Dispatch, ReactNode, SetStateAction } from "react";
import { AppState, Category, Groups, NavItems, Users } from "../../../data/model";
import { Link } from "react-router-dom";
import Search from "../search/search";

export interface Props {
  children?: ReactNode;
  heading: AppState<Users, Groups, NavItems, Category>;
  menuStatus: boolean;
  setMenuStatus: Dispatch<SetStateAction<boolean>>
};

export default function Navigation({ children, heading, menuStatus, setMenuStatus }: Props) {
  return (
    <div className="">
      <Search />
      <section className={`border bg-white p-5 w-full absolute h-96 top-24 left-0 ${menuStatus == false ? `invisible` : `visible`}`}
        onMouseOver={() => { setMenuStatus(true) }}
        onMouseOut={() => { setMenuStatus(false) }} >
        <div className="container mx-auto">
          <nav className=''>
            {heading.heading && heading.heading.map((nav, i) => (i >= 0 && i != 4) ? <div className='' key={nav.id}>
              <Link to={`${nav.link}`} onMouseOver={() => { setMenuStatus(true) }} className="text-2xl font-bold text-purple-600">{nav.title}</Link>
            </div> : "")}
          </nav>
        </div>
      </section>
      {children && children}
    </div>
  )
}
