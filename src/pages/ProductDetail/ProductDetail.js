import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import './ProductDetail.scss';
import UnderTap from './UnderTap/UnderTap';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/Feature/cartReducer.js';

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const dispatch = useDispatch();

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
        setProductData(data.find(item => item.id === Number(id)));
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  const handleAddToCart = () => {
    dispatch(addItemToCart(productData));
  };

  return (
    <div className="proudct-detail-wrap">
      <div className="product-top-wrap">
        <LeftSide productData={productData} />
        <RightSide
          productData={productData}
          handleAddToCart={handleAddToCart}
        />
      </div>
      <div className="product-under-wrap">
        <UnderTap />
      </div>
    </div>
  );
};

export default ProductDetail;
