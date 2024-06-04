import { useLoaderData } from "react-router-dom";
import About from "../Pages/About";
import Feedback from "../Pages/Feedback";
import Services from "../Pages/Services";
import Banner from "./Banner";

import Books from "./BooksItems/Books";
import Gallery from "./Gallery";


const Home = () => {
    const data=useLoaderData();
    return (
        <div>
           <section>
            <Banner/>
           </section>
           <section>
            <Books data={data}/>
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
           <section>
            <Feedback/>
           </section>

        </div>
    );
};

export default Home;