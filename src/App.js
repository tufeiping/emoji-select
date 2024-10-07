import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import EmojiSelector from './components/EmojiSelector';
import MobileLayout from './components/MobileLayout';
import './App.css';

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Router>
      <div className="App">
        {isMobile ? <MobileLayout /> : <EmojiSelector />}
        <footer className="footer" style={footerStyle}>
          {/* footer 内容保持不变 */}
        </footer>
      </div>
    </Router>
  );
}

// footerStyle, footerTextStyle, linkStyle 保持不变

export default App;