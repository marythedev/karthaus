import React, { useEffect, useRef } from 'react';
import ProductCard from '../ProductCard';
import axios from 'axios';
import './styles.css';

const ProductSection = (props) => {

    const [products, setProducts] = React.useState([]);
    const [title, setTitle] = React.useState('');

    const productsRef = useRef();

    const scroll = (direction) => {
        const container = productsRef.current;
        if (container) {
            const scrollAmount = 350; // 330px card + 20px gap
            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (props.name) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`, {
                params: {
                    category: props.name,
                }
            }).then((response) => {
                setProducts(response.data.products);
            }).catch((error) => {
                console.error("Error fetching products:", error);
            });

            if (props.name === 'Deals')
                setTitle('Special Deals Today');
            else if (props.name === 'Recommended')
                setTitle('You May Also Like');
            else
                setTitle('Best Sellers in ' + props.name);
        }
    }, [props.name, setTitle]);

    return (

        <section className="product-section">
            <h4>{title}</h4>

            <button className="scroll-btn scroll-left" onClick={() => scroll(-1)}>
                <img
                    src={window.location.origin + "/icons/chevron-prev.png"}
                    alt="previous"
                    height={15}
                ></img>
            </button>

            <div className="products" ref={productsRef}>
                {products.map((item, index) => {
                    if (item.priceBefore)
                        return <ProductCard key={index} title={item.title} price={item.price} priceBefore={item.priceBefore} image={item.image} productid={item._id} />
                    else
                        return <ProductCard key={index} title={item.title} price={item.price} image={item.image} productid={item._id} />
                })}
            </div>

            <button className="scroll-btn scroll-right" onClick={() => scroll(1)}>
                <img
                    src={window.location.origin + "/icons/chevron-next.png"}
                    alt="next"
                    height={15}
                ></img>
            </button>
        </section>
    )
}

export default ProductSection;