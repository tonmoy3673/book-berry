import { useEffect, useState } from "react";
import Product from "./Product";


const AllProducts = () => {
    const [products,setProducts]=useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch("https://book-berry-server.vercel.app/books")
        .then((res)=>res.json())
        .then((data)=>{setProducts(data)})
    },[setLoading]);
    return (
        <div>
            <h2 className="text-center pb-4 md:pb-8 text-xl lg:text-3xl text-[#00897B] font-semibold">All Books Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-y-4 lg:gap-10">
                {
                    products.map((product)=><Product product={product}  key={product.id} products={products} setProducts={setProducts}/>)
                }
            </div>
         
            
        </div>
    );
};

export default AllProducts;