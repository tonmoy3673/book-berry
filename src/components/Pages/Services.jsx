
import './ourexpert.css';

const usualBookWebsiteIssues = [
    {
      title: "Limited Book Selection",
    },
    {
      title: "Confusing Website Layout",
    },
    {
      title: "Slow Loading Times",
    },
    {
      title: "No Customer Reviews",
    },
    {
      title: "High Prices",
    },
    {
      title: "Limited Payment Options",
    },
    {
      title: "Poor Customer Support",
    },
    {
      title: "Delayed Shipping",
    },
    {
      title: "No Personalized Recommendations",
    },
    {
      title: "Outdated Book Information",
    },
  ];
  

const benefits = [
    {
      title: "Wide Selection of Books",
    },
    {
      title: "Convenient Shopping Experience",
    },
    {
      title: "Easy Search and Navigation",
    },
    {
      title: "Customer Reviews and Ratings",
    },
    {
      title: "Frequent Discounts and Promotions",
    },
    {
      title: "E-book and Audiobook Availability",
    },
    {
      title: "Fast and Reliable Shipping",
    },
    {
      title: "Personalized Recommendations",
    },
    {
      title: "Secure Online Payments",
    },
    {
      title: "24/7 Customer Support",
    },
  ];
  

const Services = () => {
  return (
    <div className="">
      <div className="px-6">
        <div className="order-1 col-span-3 pt-10">
          <div className="mx-auto flex flex-col sm:text-left text-center">
            
            <h2 className="text-lg lg:text-3xl 2xl:text-[36px] font-semibold text-[#00897B] text-center ">
              Why Choose US
            </h2>

            <p className="text-base lg:leading-[170%] mt-[8px] py-5 mb-3">
            At our online book website, we offer an extensive selection of books across all genres, ensuring you will always find your next great read. Our user-friendly interface and advanced search features make browsing and purchasing books a breeze.
            </p>
          </div>

          {/* 2 card */}
          <div className="grid sm:grid-cols-2 gap-5 md:gap-4">
            <div className="bg-white border shadow rounded-lg">
              <h2 className="bg-[#00897B] text-center py-[7px] text-white  text-base rounded-t-lg">
                Usual Experience
              </h2>
              <div className="grid grid-cols-2 py-4 px-5 3xl:px-[25px] text-[8px] lg:text-xs 2xl:text-sm">
                {usualBookWebsiteIssues.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-x-3 items-center mb-6 leading-none  "
                  >
                    <img
                      src='/src/assets/icons/x.png'
                      className="lg:h-[14px] lg:w-[14px] h-[9px] w-[9px] "
                    />
                    <p className="text-base">{usual.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border shadow rounded-lg ">
              <h2 className="bg-[#00897B] text-center py-[7px] text-white text-base rounded-t-lg">
                Usual Experience
              </h2>
              <div className="grid grid-cols-2 py-4 px-5 3xl:px-[25px] text-base 2xl:text-sm">
                {benefits.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-x-3 items-center mb-6 leading-none "
                  >
                    <img
                      src='/src/assets/icons/r.png'
                      className="lg:h-[14px] lg:w-[14px] h-[9px] w-[9px] "
                    />
                    <p className="text-base">{usual.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
