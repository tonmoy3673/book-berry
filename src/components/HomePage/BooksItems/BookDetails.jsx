import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const book=useLoaderData();
    console.log(book);
    return (
        <div>
            
        </div>
    );
};

export default BookDetails;