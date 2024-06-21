import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { BiUserCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = ({ display, minimize }) => {
  return (
    <aside
      className={`sidebar transform ${
        display ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-[400ms] bg-slate-800 text-black ${
        minimize ? "w-[90px]" : "w-64"
      } lg:translate-x-0 lg:static absolute top-[60px] left-0 min-h-screen-minus-60px z-50`}
    >
      <nav className=" flex min-h-[calc(100vh-100px)] flex-col justify-between overflow-hidden">
        <div className="flex flex-col justify-between py-6 px-4 gap-2 self-stretch max-h-[calc(100vh-100px)] overflow-y-hidden hover:!overflow-auto scrollbar">
          <Link to="/" target="_blank">
            <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
              <HomeIcon />
              <div
                className={`${
                  minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
              >
                <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                  Visit Site
                </p>
              </div>
            </li>
          </Link>

          <Link to="/dashboard">
            <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
              <DashboardIcon />
              <div
                className={`${
                  minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
              >
                <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                  Dashboard
                </p>
              </div>
            </li>
          </Link>
          <Link to="/dashboard/all-products">
            <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
              <MenuBookIcon />
              <div
                className={`${
                  minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
              >
                <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                  Books
                </p>
              </div>
            </li>
          </Link>

          <Link to="/dashboard/add-products">
            <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
              <MenuBookIcon />
              <div
                className={`${
                  minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
              >
                <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                  Add Book
                </p>
              </div>
            </li>
          </Link>

          <Link to="/dashboard/user">
            <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
              <BiUserCheck />
              <div
                className={`${
                  minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
              >
                <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                  Users
                </p>
              </div>
            </li>
          </Link>
        </div>
        
      </nav>
    </aside>
  );
};

export default Sidebar;
