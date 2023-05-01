import React from 'react';
import './ProductSearch.scss';

const ProductSearch = ({ total, handleSortChange }) => {
  const handleOnChange = e => {
    handleSortChange(e.target.value);
  };

  return (
    <div className="search-box">
      <div className="product-stats-box">
        <div className="search-result">
          <div className="result-number">{total}</div>
          <div>건의 결과가 있어요</div>
        </div>
        <div className="filter-wrapper">
          <div className="filter-selector-box">
            <select className="filter-selector" onChange={handleOnChange}>
              <option value="recent_product">최근 등록순</option>
              <option value="price_high">높은 가격순</option>
              <option value="price_low">낮은 가격순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
