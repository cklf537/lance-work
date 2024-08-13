import { ReactNode, useState } from "react";
import { AppState, Category, Groups, NavItems, Users } from "../../../data/model";
import { Link } from "react-router-dom";

export interface Props {
  children?: ReactNode;
  heading: AppState<Users, Groups, NavItems, Category>;
};

export default function Navigation({children, heading}: Props) {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <div className="group">
        <nav className='hidden lg:flex lg:gap-8 lg:item-center lg:text-sm lg:block'>
            {heading.heading && heading.heading.map((nav, i) => i <= 3 ? <div className='' key={nav.id}>
            <Link to={`${nav.link}`}>{nav.title}</Link>
            </div> : "")}
          </nav>
          <section className="border bg-white p-5 w-full absolute h-96 top-24 left-0 invisible group-hover:visible" >
            <div className="container mx-auto">
            <div>Level 2.1</div>
            <div>Level 2.1</div>
            <div>Level 2.1</div>
            <div>Level 2.1</div>
            <div>Level 2.1</div>
            {/* {expandMenue<compState>({})} */}
            </div>
          </section>
        {children && children}
    </div>
  )
}
