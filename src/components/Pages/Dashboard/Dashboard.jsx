import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.email) {
      const token = localStorage.getItem("access-token");

      if (!token) {
        setError('No access token found. Please log in again.');
        return;
      }

      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/user/${user?.email}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }

          const result = await response.json();
          setData(result);
        } catch (err) {
          console.error('Fetch error:', err);
          setError('Failed to fetch user data');
        }
      };

      fetchData();
    }
  }, [user?.email]);
  console.log(data);

  return (
    <div className="py-6 md:py-10">
      <h2 className="text-xl lg:text-3xl font-semibold text-[#00897B] mb-2 md:mb-5">
        User Information
      </h2>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <>
      <div className="flex items-center justify-center">
      <div>
      <figure className="py-3">
      <img src={data?.photoURL} className="w-64 rounded-md"/>
      </figure>
          <h3 className="text-xl font-semibold text-[#00897B] py-2">
            User Name: {data?.name}
          </h3>
          <h3 className="text-xl font-semibold text-[#00897B]">
            User Email: {data?.email}
          </h3>
      </div>
      </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
