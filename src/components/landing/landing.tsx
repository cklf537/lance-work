import { NavItems } from '../../data/model';
import Dashboard from '../landing/dashboard/dashboard';
import Footer from './footer/footer';
import Header from './header/header';


const navItem: NavItems[] = [
  {
      title: "Referal",
      link: "/referal",
      id: "001",
      alt: "Internal refferal",
  },
  {
      title: "Connect with people",
      link: "/connectwithcommunity",
      id: "002",
      alt: "Connect with people",
  },
  {
      title: "Learning",
      link: "/learning",
      id: "003",
      alt: "Learning",
  },
  {
      title: "Treanding",
      link: "/treanding",
      id: "004",
      alt: "Treanding",
  },
  {
    title: "Sign up",
    link: "#",
    id: "005",
    alt: "Signup",
},
{
  title: "Login",
  link: "#",
  id: "006",
  alt: "Login",
}
]

export default function Landing() {
  return (
    <div className="">
      <div className=''>
        <Header navItem={navItem} />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}
