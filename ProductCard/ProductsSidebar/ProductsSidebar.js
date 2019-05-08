import React from 'react';
import './style.scss';
import ProductCardList from '../ProductCard/ProductCardList';

const ProductsSidebar = () => (
  <aside className="sidebar">
    <h1>Products Sidebar</h1>
    <ProductCardList />
    <ProductCardList />
    <ProductCardList />
    {/* <ul>
      Product 1
    </ul>
    <ul>
      Product 2
    </ul>
    <ul>
      Product 3
    </ul> */}
  </aside>
);

export default ProductsSidebar;
