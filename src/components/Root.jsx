import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";

export default function Root() {
  return (
    <>
      <div className="containter mx-auto px-2 lg:px-24">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </>
  );
}
