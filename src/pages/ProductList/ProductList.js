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
  const [sortBy, setSortBy] = useState('recent_product');

  useEffect(() => {
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
        let sortedData = [...data];
        sortedData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setData(sortedData);
        setFilteredData(sortedData.filter(item => item.listId === currentTab));
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, [currentTab]);

  const handleSortChange = sortType => {
    let sortedData = [...filterData];
    switch (sortType) {
      case 'recent_product':
        sortedData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case 'price_high':
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case 'price_low':
        sortedData.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setSortBy(sortType);
    setFilteredData(sortedData);
  };

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
          {/* 검색결과 */}
          <div className="search-container">
            <ProductSearch
              total={filterData.length}
              handleSortChange={handleSortChange}
            />
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
