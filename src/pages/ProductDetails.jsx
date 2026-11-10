import { useParams } from "react-router";
import products from '../data/products'


function ProductDetails() {

    const {id} = useParams();
    


        const product = products.find(
            prod => prod.id === Number(id)
        );

    
    return (
        <div>
            <h1>Product Details</h1>
            {product? (
                <div>
                    <p>Product ID : {id}</p>
                    <p>Product Name: {product.name}</p> 
                    <p>Product Price: {product.price}</p>
                </div>
            ) : (
                    <p>Product Not Found</p> 
            )}
  
        </div>
    );
}

export default ProductDetails;