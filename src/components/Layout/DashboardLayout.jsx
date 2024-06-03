
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-base-300 min-h-screen p-3 lg:p-12 pt-12 lg:pt-28">
        <ul>
        <Link to="/dashboard"><button className="bg-[#880769] hover:bg-warning rounded-md mb-6 p-4 text-white w-full">
        Dashboard
            </button></Link>
          
            <Link to="/dashboard/all-products"><button className="bg-[#880769] hover:bg-warning rounded-md mb-6 p-4 text-white w-full">
            All Products
            </button></Link>
            <Link to="/dashboard/add-products"><button className="bg-[#880769] hover:bg-warning rounded-md mb-6 p-4 text-white w-full">
            Add Product
           </button></Link>
           <Link to="/" ><button className="bg-[#880769] hover:bg-warning rounded-md p-4 text-white w-full">
           Home
           </button></Link>
          
        </ul>
      </div>
      <div className="col-span-10 p-10 md:p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;