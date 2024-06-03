import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Dashboard = () => {
    const{user}=useContext(AuthContext);
    
    return (
        <div className="py-6 md:py-16">
            <h2 className="text-xl lg:text-3xl font-semibold text-[#00897B] mb-2 md:mb-5">User Information</h2>
            <h3 className="text-xl font-semibold text-[#00897B] py-2">User Name : {user?.displayName}</h3>
            <h3 className="text-xl font-semibold text-[#00897B]">User Email : {user?.email}</h3>
        </div>
    );
};

export default Dashboard;