import { ReactNode } from "react";
import { AppState, Category, Groups, NavItems, Users } from "../../../data/model";
import { Link } from "react-router-dom";

export interface Props {
  children?: ReactNode;
  heading: AppState<Users, Groups, NavItems, Category>;
}

export default function Navigation({children, heading}: Props) {
  return (
    <div>
        <nav className='hidden lg:flex lg:gap-8 lg:item-center lg:text-sm lg:block'>
            {heading.heading && heading.heading.map((nav, i) => i <= 3 ? <div className='' key={nav.id}>
            <Link to={`${nav.link}`}>{nav.title}</Link>
            </div> : "")}
          </nav>
        {children && children}
    </div>
  )
}
