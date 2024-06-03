import About from "../Pages/About";
import Services from "../Pages/Services";
import Banner from "./Banner";
import Books from "./Books";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div>
           <section>
            <Banner/>
           </section>
           <section>
            <Books/>
           </section>
           <section>
            <About/>
           </section>
           <section>
            <Services/>
           </section>
           <section>
            <Gallery/>
           </section>

        </div>
    );
};

export default Home;