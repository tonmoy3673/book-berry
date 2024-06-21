import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaLocationArrow } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { user, setLoading, updateUser } = useContext(AuthContext);
  const [data, setData] = useState({
    name: user?.displayName,
    photoURL: user?.photoURL,
  });
  const [error, setError] = useState("");

  const handleOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    try {
      const token = localStorage.getItem("access-token");

      if (!token) {
        return setError("No authorization token found");
      }

      const url = `https://book-berry-server.onrender.com/user/${user?.email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [user?.email]);

  const handleSubmit = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        if(!data.name){
          return  toast.error("User Name is required!");
        }else if(!data.photoURL){
          return  toast.error("Photo URL is Required!");
        }else{
          const updateData = { displayName: data.name, photoURL: data.photoURL };
        setLoading(true);

        // Update Firebase user profile
        updateUser(updateData)
          .then(() => {
            // Profile updated successfully
            toast.success("Firebase profile updated successfully!");

            // Now update the backend database
            fetch(
              `https://book-berry-server.onrender.com/user/${user?.email}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "access-token"
                  )}`,
                },
                body: JSON.stringify(data),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire("Saved!", "", "success");
                setLoading(false);
              });
          })
          .catch((error) => {
            console.error("Error updating Firebase profile:", error);
            Swal.fire("Firebase profile update failed", "", "error");
            setLoading(false);
          })
          .finally(() => {
            setLoading(false);
          });
        }
        
        
      }
    });
  };

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
                <img src={user?.photoURL} className="w-36 lg:w-80 rounded-md" />
              </figure>
              <h3 className="text-xl font-semibold text-[#00897B] py-2">
                User Name: {user?.displayName}
              </h3>
              <h3 className="text-xl font-semibold text-[#00897B]">
                User Email: {user?.email}
              </h3>
            </div>

            {/* ================ form part ============== */}
            <div>
              <h3 className="text-lg md:text-2xl text-center mb-2 md:mb-3 text-[#00897B]">
                Edit User Info
              </h3>
              <div>
                <div>
                  {" "}
                  <h5 className="mb-2 text-[#00897B] text-base">User Name *</h5>
                  <label className="sr-only" htmlFor="name">
                    name
                  </label>
                  <input
                    className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black text-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                    placeholder="Type Food Name"
                    type="text"
                    id="name"
                    value={data.name}
                    required
                    onChange={(e) => {
                      handleOnChange("name", e.target.value);
                    }}
                  />
                </div>

                <div className="mt-2 md:mt-3">
                  <h5 className="mb-2 text-[#00897B] text-base">Photo URL *</h5>
                  <label className="sr-only" htmlFor="photoURL">
                    photoURL
                  </label>
                  <input
                    className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black text-black p-3 lg:pr-16 pr-3  text-sm"
                    placeholder="Input Photo URL"
                    type="text"
                    id="photoURL"
                    required
                    value={data.photoURL}
                    onChange={(e) => {
                      handleOnChange("photoURL", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className=" flex md:block xs:justify-center xs:items-center xs:mx-auto">
                <button
                  onClick={handleSubmit}
                  value="submit"
                  type="submit"
                  className="rounded-md bg-[#00897B] hover:bg-[#FBCC21E4] px-10 py-4 md:px-20  font-semibold text-base  text-white items-center flex lg:mt-13 mt-8 "
                >
                  Update <FaLocationArrow className=" ml-2" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
