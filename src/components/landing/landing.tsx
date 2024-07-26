import React from 'react'
import AppHeader from './header/header'



const navItem: NavItems[] = [
  {
      title: "Find jobs",
      link: "#",
      id: "001",
      alt: "Find Jobs",
  },
  {
      title: "Connect with people",
      link: "#",
      id: "002",
      alt: "Connect with people",
  },
  {
      title: "Learning",
      link: "#",
      id: "003",
      alt: "Learning",
  },
  {
      title: "Treanding",
      link: "#",
      id: "004",
      alt: "Treanding",
  },
  {
    title: "Signin",
    link: "#",
    id: "005",
    alt: "Signin",
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
    <>
    <div className='container max-auto'>
      <AppHeader navItem={navItem} />
    </div>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
    </>
  )
}
