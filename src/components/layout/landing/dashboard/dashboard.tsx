import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return <div className="container mx-auto  h-screen px-5 py-5 lg:p-0 lg:py-5">
    <Outlet />
  </div>;
}
