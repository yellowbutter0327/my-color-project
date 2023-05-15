import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './SearchItem.scss';

const SearchItem = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
        setSearchResult(data);
        setFilteredResult(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = decodeURIComponent(location.search.replace('?q=', ''));
    if (searchQuery) {
      const filteredResult = searchResult.filter(
        item => item.title && item.title.includes(searchQuery)
      );
      setFilteredResult(filteredResult);
      console.log('searchQuery:', searchQuery);

      // filteredResult 변수를 출력하여 값 확인
      console.log('filteredResult:', filteredResult);
    } else {
      setFilteredResult(searchResult);
    }
  }, [location.search, searchResult]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (filteredResult.length === 0) {
    return (
      <div>
        No results found for "
        {decodeURIComponent(location.search.replace('?q=', ''))}"
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="search-item-title">
        "{decodeURIComponent(location.search.replace('?q=', ''))}"로 검색한
        결과입니다.
      </h1>
      <div className="search-all-container">
        {filteredResult.map(item => (
          <div
            key={item.id}
            onClick={() => navigate(`/productdetail/${String(item.id)}`)}
            className="search-list-container"
          >
            <div className="search-item-info">
              <div className="search-image-wrapper">
                <img
                  className="search-item-img"
                  src={item.src}
                  alt="상품이미지"
                />
              </div>

              <div className="search-item-content-box">
                <div className="search-item-wrapper">
                  <div className="search-item-name">{item.title}</div>
                </div>

                <div className="search-price-wrapper">
                  <span className="search-discount-price">
                    {item.price}
                    <span>원</span>
                  </span>

                  <span className="search-origin-price">
                    {item.originPrice}
                    <span>원</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchItem;

