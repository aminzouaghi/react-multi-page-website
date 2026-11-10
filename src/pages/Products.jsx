import { Link } from 'react-router';
import products from '../data/products'


function Products() {

    
    return (
        <div>
            <h1>Our Products</h1>
            
            {
                products.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>

                        <Link to={`/products/${product.id}`}>
                            View Details
                        </Link>
                    </div>
            ))}
        </div>
    );
}

export default Products;