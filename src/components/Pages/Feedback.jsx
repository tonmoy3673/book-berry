

import toast from "react-hot-toast";
import { FaLocationArrow } from "react-icons/fa6";
const Feedback = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form=event.target;
    const formData = new FormData(form);

    formData.append("access_key", "0feabc17-69c3-4689-adc2-4326df278ffa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        form.reset()
        toast.success('Message has been sent successfully!!')
        
    }
  };

    return (
        <div className="py-6 lg:py-10 mb-5 md:mb-12 md:flex gap-20  items-center" >
           <div>
                <img src='https://i.ibb.co/prn60yq/feedback.jpg' className='w-[300px] lg:w-[500px] mx-auto md:mx-0'>
                </img>
            </div>
           <div>       
            <div className="rounded-lg  items-center">
              <h2 className="lg:mb-10 mb-5 text-lg lg:text-3xl 2xl:text-[32px] text-[#00897B] font-semibold text-center">
                {" "}
                Give Us Feedback{" "}
              </h2>
              <form onSubmit={onSubmit} className=" ">
                <div className="text-base">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <h5 className="mb-2 text-[#00897B] text-sm  md:text-base font-semibold">Your name *</h5>
                      <label className="sr-only" htmlFor="name">
                        name
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                        placeholder="Robot Fox"
                        type="text"
                        name="name"
                      required/>
                    </div>

                    <div>
                      <h5 className="mb-2 text-[#00897B] text-sm md:text-base font-semibold">Email *</h5>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126]  shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                        placeholder="info.example@gmail.com"
                        type="email"
                        name="email"
                      required/>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4  ">
                  <div>
                    <h5 className="mb-2 text-[#00897B] text-sm md:text-base font-semibold">Subjects *</h5>
                    <label className="sr-only" htmlFor="text">
                      Text
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Subjects "
                      type="text"
                      name="subject"
                      required
                    />
                  </div>

                  <div>
                    <h5 className="mb-2 text-[#00897B] text-sm md:text-base font-semibold">Your Phone *</h5>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="+8801700000000"
                      type="tel"
                      name="phone"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <h5 className="mb-2 text-[#00897B] text-sm md:text-base font-semibold">Message *</h5>
                  <textarea
                    className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-4 lg:pr-16 pr-3  text-sm"
                    placeholder="Write Message"
                    rows="6"
                    name="message"
                 required ></textarea>
                </div>

                <div className=" flex md:block xs:justify-center xs:items-center xs:mx-auto">
                  <button
                    type="submit"
                    className="  rounded-md bg-[#00897B] hover:bg-warning px-10 py-4 md:px-20  font-semibold text-sm md:text-base text-white  items-center flex lg:mt-13 mt-8 "
                  >
                    Submit <FaLocationArrow className=" ml-2 text-white" />
                  </button>
                </div>
              </form>
            </div>
          
           </div>
        </div>
    );
};

export default Feedback;