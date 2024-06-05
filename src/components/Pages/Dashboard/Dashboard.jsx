import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaLocationArrow } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { user,setLoading } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [name,setName]=useState(data.name);
  const [photoURL,setPhotoURL]=useState(data.photoURL);

  

  useEffect(() => {
    if (user?.email) {
      const token = localStorage.getItem("access-token");

      if (!token) {
        setError("No access token found. Please log in again.");
        return;
      }

      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://book-berry-server.vercel.app/user/${user?.email}`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }

          const result = await response.json();
          
          setData(result);
        
          

        } catch (err) {
          console.error("Fetch error:", err);
          setError("Failed to fetch user data");
        }
      };

      fetchData();
    }
  }, [user?.email]);
  console.log(data);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    const data={name,photoURL}
  
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result)=>{

      if (result.isConfirmed) {
        setLoading(true);
          fetch(`https://book-berry-server.vercel.app/user/${user?.email}`, {
            method: "PUT",
            headers:{
              "Content-type":"application/json",
              authorization: `Bearer ${localStorage.getItem('access-token')}`
          },
          body:JSON.stringify(data),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setName(data.name)
          setPhotoURL(data.photoURL)
              console.log(data);
              
              Swal.fire("Saved!", "", "success");
              toast.success('Info has been Updated!!')
              setLoading(false);
            })
            .catch((error) => {
              console.error('There was a problem with the fetch operation:', error);
              Swal.fire("Changes are not saved", "", "info");
            });
        }
    })

}

  return (
    <div className="py-6 md:py-10">
      <h2 className="text-xl lg:text-3xl font-semibold text-[#00897B] mb-2 md:mb-5 text-center">
        User Information
      </h2>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <>
          <div className="flex items-center justify-center gap-16 ">
            <div>
              <figure className="py-3">
                <img src={data?.photoURL} className="w-36 lg:w-80 rounded-md" />
              </figure>
              <h3 className="text-xl font-semibold text-[#00897B] py-2">
                User Name: {data?.name}
              </h3>
              <h3 className="text-xl font-semibold text-[#00897B]">
                User Email: {data?.email}
              </h3>
            </div>

            {/* ================ form part ============== */}
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl text-center mb-2 md:mb-3">Edit User Info</h3>
              <div>
                <div>
                  {" "}
                  <h5 className="mb-2 text-[#00897B] text-base">User Name *</h5>
                  <label className="sr-only" htmlFor="name">
                    name
                  </label>
                  <input
                    className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                    placeholder="Type Food Name"
                    type="text"
                    id="name"
                    value={data.name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                </div>
                
                    <div className="mt-2 md:mt-3">
                    <h5 className="mb-2 text-[#00897B] text-base">Photo URL *</h5>
                    <label className="sr-only" htmlFor="photoURL">
                    photoURL
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Input Photo URL"
                      type="text"
                      id="photoURL"
                      value={data.photoURL}
                        onChange={(e)=>setPhotoURL(e.target.value)}
                    required/>
                  </div>
              </div>
              <div className=" flex md:block xs:justify-center xs:items-center xs:mx-auto">
                  <button
                  value='submit'
                    type="submit"
                    className="rounded-md bg-[#00897B] hover:bg-[#FBCC21E4] px-10 py-4 md:px-20  font-semibold text-base  text-white items-center flex lg:mt-13 mt-8 "
                  >
                    Update <FaLocationArrow className=" ml-2" />
                  </button>
                </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;