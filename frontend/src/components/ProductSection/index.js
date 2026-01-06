import { useEffect, useRef, useState } from 'react';
import ProductCard from '../ProductCard';
import axios from 'axios';
import './styles.css';

const ProductSection = (props) => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState('');
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const productsRef = useRef();

    const updateScrollButtons = () => {
        const container = productsRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
            container.scrollLeft + container.clientWidth < container.scrollWidth
        );
    };

    const scroll = (direction) => {
        const container = productsRef.current;
        if (container && container.firstChild) {
            const cardWidth = container.firstChild.offsetWidth;
            const gap = parseInt(getComputedStyle(container).gap) || 0;
            const scrollAmount = cardWidth + gap;

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
            }).catch(console.error);

            if (props.name === 'Deals')
                setTitle('Special Deals Today');
            else if (props.name === 'Recommended')
                setTitle('You May Also Like');
            else
                setTitle('Best Sellers in ' + props.name);
        }
    }, [props.name]);

    useEffect(() => {
        const container = productsRef.current;
        if (!container) return;

        updateScrollButtons();
        container.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);

        return () => {
            container.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('resize', updateScrollButtons);
        };
    }, [products]);

    return (
        <section className="product-section">
            <h4>{title}</h4>

            {canScrollLeft && (
                <button className="scroll-btn scroll-left" onClick={() => scroll(-1)}>
                    <img
                        src={window.location.origin + "/icons/chevron-prev.png"}
                        alt="previous"
                        height={15}
                    ></img>
                </button>
            )}

            <div className="products" ref={productsRef}>
                {products.map((item, index) => {
                    if (item.priceBefore)
                        return <ProductCard key={index} title={item.title} price={item.price} priceBefore={item.priceBefore} image={item.image} productid={item._id} />
                    else
                        return <ProductCard key={index} title={item.title} price={item.price} image={item.image} productid={item._id} />
                })}
            </div>

            {canScrollRight && (
                <button className="scroll-btn scroll-right" onClick={() => scroll(1)}>
                    <img
                        src={window.location.origin + "/icons/chevron-next.png"}
                        alt="next"
                        height={15}
                    ></img>
                </button>
            )}
        </section>
    );
};

export default ProductSection;