import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductItem from './Component/Body/ProductItem';
import ProductSearch from './Component/Body/ProductSearch';
import Dropdown from './Component/Head/Dropdown';
import ProductMenu from './Component/Head/ProductMenu';

function ProductList() {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState([]);
  const [filterData, setFilteredData] = useState([]);

  // console.log(currentTab);
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
      setFilteredData(data.filter(item => item.listId === currentTab));
    })
    .catch(error => {
      console.log('Error:', error);
    });

  // useEffect(() => {
  //   // 탭별로 데이터 필터링
  //   if (currentTab === 0) {
  //     setFilteredData(data.filter(item => item.id === 0));
  //   } else if (currentTab === 1) {
  //     setFilteredData(data.filter(item => item.id === 1));
  //   } else if (currentTab === 2) {
  //     setFilteredData(data.filter(item => item.id === 2));
  //   } else if (currentTab === 3) {
  //     setFilteredData(data.filter(item => item.id === 3));
  //   }
  // }, [data, currentTab]);

  console.log(currentTab);

  return (
    <div className="product-list-container">
      <div className="content-wrapper">
        <div className="product-list-head">
          <div className="product-menu">
            <ProductMenu
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
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
            <ProductItem data={filterData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
