import React from 'react';
import './Review.scss';

const Review = () => {
  return (
    <div>
      <p>Review 개</p>
      <div className="review-top-wrap">
        <div className="review-scope-num">4.9</div>
        <div className="review-scope-graph-wrap">
          <div className="review-scope-graph-container">
            <span className="review-scope-graph-score">5점</span>
            <div className="review-scope-graph-uncolor">
              <div className="review-scope-graph-color" />
            </div>
            <span className="review-scope-graph-num">192</span>
          </div>

          <div className="graph-num">4점</div>
          <div className="graph-num">3점</div>
          <div className="graph-num">2점</div>
          <div className="graph-num">1점</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
