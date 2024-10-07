import React from 'react';

function Emoji() {
  return (
    <div className="icon-display">
      <h2>表情图标</h2>
      <div className="icon-grid">
        {/* 这里添加表情图标 */}
        <span>😀</span>
        <span>😂</span>
        <span>🤔</span>
        {/* 添加更多表情 */}
      </div>
    </div>
  );
}

export default Emoji;