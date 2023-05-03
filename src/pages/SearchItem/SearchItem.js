import React, { useEffect, useState, useNavigate } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SearchItem.scss';

const SearchItem = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  return (
    <div>
      <h1>검색 결과: "{query}"</h1>
      <span>서치아이템</span>
    </div>
  );
};

export default SearchItem;
