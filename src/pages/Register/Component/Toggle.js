import React, { useState } from 'react';
import './Toggle.scss';

function Toggle({ title, content, disabled, checked, onChange }) {
  return (
    <div className="check-box">
      <div className="check-box-title">
        <input
          type="checkbox"
          className="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        <span className="check-text">{title}</span>
      </div>
      <div className="check-content">{content}</div>
    </div>
  );
}

export default Toggle;
