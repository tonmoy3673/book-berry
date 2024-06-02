

const About = () => {
    return (
      <div className="lg:flex py-8 lg:py-16 mt-8 lg:gap-16 ">
        
        <img src="/src/assets/images/about.jpg" className="w-[500px] mx-auto lg:mx-0 mb-6 lg:mb-0 order-2 lg:order-1 rounded-md"/>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-lg lg:text-3xl 2xl:text-[36px] font-semibold text-[#00897B] text-center lg:text-start">About US</h2>
          <p className=" mt-[15px] text-base lg:leading-[170%]">Welcome to Foodie, your ultimate destination for culinary inspiration and gourmet delights! At Foodie, we believe that food is more than just sustenance it is an experience, an art, and a way to connect with people from all around the world.</p>
          <p className="text-base lg:leading-[170%] mt-[8px]">
          Foodie was born out of a passion for food and a love for sharing it with others. Our team of food enthusiasts, chefs, and writers come from diverse backgrounds, but we all share a common goal: to make cooking enjoyable and accessible for everyone. From classic dishes to innovative creations, we curate a wide range of recipes that cater to all tastes and dietary preferences.
          At Foodie, we are more than just a website we are a community of passionate food lovers. We invite you to join us on this delicious journey. Whether you are here to find your next favorite recipe, learn a new cooking technique, or simply enjoy beautiful food photography, we hope to inspire you to savor the flavors of life.
  
  Thank you for being a part of our story. Let us make every meal a celebration!
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  