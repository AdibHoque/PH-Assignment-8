import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";
import {ToastContainer} from "react-toastify";

export default function Root() {
  return (
    <>
      <div className="containter mx-auto my-2 px-2 lg:px-24">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <ToastContainer />
      </div>
    </>
  );
}
