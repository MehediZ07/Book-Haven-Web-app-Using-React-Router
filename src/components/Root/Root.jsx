import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <NavBar></NavBar>
      <div className="mt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
