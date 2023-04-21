import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductItem from './Component/Body/ProductItem';
import ProductSearch from './Component/Body/ProductSearch';
import Dropdown from './Component/Head/Dropdown';
import ProductMenu from './Component/Head/ProductMenu';

function ProductList() {
  const [data, setData] = useState([]);

  fetch(`${process.env.PUBLIC_URL}/data/productItemData.json`, {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError('JSON expected');
      }
      return response.json();
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.log('Error:', error);
    });

  return (
    <div className="product-list-container">
      <div className="content-wrapper">
        <div className="product-list-head">
          <div className="product-menu">
            <ProductMenu />
          </div>
          {/* 필터 */}
          <div className="product-filter-box">
            <Dropdown />
          </div>

          {/* 검색결과 */}
          <div className="search-container">
            <ProductSearch total={data.length} />
          </div>
          {/* 아이템 */}
          <div className="item-container">
            <ProductItem data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
