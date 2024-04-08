import React from 'react';
import ProductCard from './ProductCard';
import './ProductSection.css';

const ProductSection = () => {
    return (
        <section>
            <h4>Special Deals Today</h4>
            <div className="products d-flex flex-row">
                <ProductCard title="Toddler Table" price="80.99" priceBefore="175.99" image="/images/placeholders/table.png" />
                <ProductCard title="Comb Set" price="5.99" priceBefore="18.99" image="/images/placeholders/comb.png" />
                <ProductCard title="Sofa" price="399.99" priceBefore="785.99" image="/images/placeholders/sofa.png" />
                <ProductCard title="Guitar" price="50.99" priceBefore="100.99" image="/images/placeholders/guitar.png" />
            </div>
        </section>
    )
}

export default ProductSection;