import { ReactC, ReactElement, ReactNode } from "react";
import { AppState, Category, Groups, NavItems, Users } from "../../../data/model";
import { Link } from "react-router-dom";

type Props = {
    children: ReactNode
}

export default function Navigation({props, heading}: {props:Props, heading: AppState<Users, Groups, NavItems, Category>}) {
  return (
    <div>
        <nav className='hidden lg:flex lg:gap-8 lg:item-center lg:text-sm lg:block'>
            {heading.heading && heading.heading.map((nav, i) => i <= 3 ? <div className='' key={nav.id}>
            <Link to={`${nav.link}`}>{nav.title}</Link>
            </div> : "")}
          </nav>
        // {props && props.children}
    </div>
  )
}
