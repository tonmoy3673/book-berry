import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="home-banner rounded-md py-20 min-h-screen flex justify-center items-center bg-blend-multiply bg-black">
        <div className="text-center banner-content">
          <div>
            <h1 className="text-white title text-3xl xl:text-4xl 2xl:text-[42px] 4xl:text-[45px] leading-10">
              A Journey Through Pages: Where Every Book is an Adventure
            </h1>
            <p className="mt-8 leading-10 text-white text-base font-normal lg:px-20 text-center">
              Find Your Perfect Book at Book-Berry. Explore Our Enchanting
              Selection and Sweeten Your Reading Experience.Taste the Magic of
              Stories: Book-Berry, Where Every Page is a Treat. Join Our
              Community of Readers and Discover Books That Delight.
            </p>
            <div className="flex justify-center">
              <button className="rounded-md z-40 hover:bg-warning bg-[#00897B] text-white py-4 px-8 mt-8 my-btn">
                Get an Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
