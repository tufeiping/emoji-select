import React from 'react';
import EmojiSelector from './components/EmojiSelector';
import './App.css';

function App() {
  return (
    <div className="App">
      <EmojiSelector />
      <footer className="footer" style={footerStyle}>
        <p style={footerTextStyle}>
          GitHub 仓库：
          <a href="https://github.com/tufeiping/emoji-select" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://img.shields.io/badge/GitHub-Repository-blue?style=flat&logo=github" alt="GitHub" />
          </a>
        </p>
      </footer>
    </div>
  );
}

const footerStyle = {
  position: 'fixed', // 固定在底部
  bottom: '0',
  left: '0',
  right: '0',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#f8f9fa', // 背景颜色
  borderTop: '1px solid #e7e7e7', // 上边框
  zIndex: '1000', // 确保在其他内容之上
};

const footerTextStyle = {
  margin: '0',
  color: '#333', // 字体颜色
  fontSize: '12px', // 设置字体大小
};

const linkStyle = {
  marginLeft: '5px', // 链接与文本之间的间距
};

export default App;