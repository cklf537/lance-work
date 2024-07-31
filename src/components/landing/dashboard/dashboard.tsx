import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return <div className="container mx-auto p-5 pl-0 h-screen">
    <Outlet />
  </div>;
}
