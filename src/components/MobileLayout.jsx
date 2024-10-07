import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import './MobileLayout.css'; // 你可以在这里添加样式

// 导入各个图标类型的组件（你需要创建这些组件）
import Emoji from './IconTypes/Emoji';
import Gesture from './IconTypes/Gesture';
import OfficeSupplies from './IconTypes/OfficeSupplies';
import Symbols from './IconTypes/Symbols';
import Programming from './IconTypes/Programming';
import SvgIcons from './IconTypes/SvgIcons';

function MobileLayout() {
  const [greeting, setGreeting] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    updateGreeting();
    const timer = setInterval(updateGreeting, 60000); // 每分钟更新一次
    return () => clearInterval(timer);
  }, []);

  const updateGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('早上好');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('下午好');
    } else {
      setGreeting('晚上好');
    }
  };

  const handleIconTypeSelect = (type) => {
    navigate(`/${type}`);
  };

  return (
    <div className="mobile-layout">
      <div className="header">
        <h1>{greeting}</h1>
        <p>来日方长，打个卡休息吧</p>
      </div>
      
      <div className="section">
        <h2>图标介绍</h2>
        <div className="icon-intro">
          <p>本项目包含多种类型的图标，方便开发使用。</p>
        </div>
      </div>
      
      <div className="section">
        <h3>选择图标</h3>
        <p>点击下方按钮选择图标类型</p>
        <div className="icon-selection">
          <button onClick={() => handleIconTypeSelect('emoji')}>表情</button>
          <button onClick={() => handleIconTypeSelect('gesture')}>手势</button>
          <button onClick={() => handleIconTypeSelect('office')}>办公用品</button>
          <button onClick={() => handleIconTypeSelect('symbols')}>符号</button>
          <button onClick={() => handleIconTypeSelect('programming')}>程序</button>
          <button onClick={() => handleIconTypeSelect('svg')}>SVG 图标</button>
        </div>
      </div>
      
      <Routes>
        <Route path="/emoji" element={<Emoji />} />
        <Route path="/gesture" element={<Gesture />} />
        <Route path="/office" element={<OfficeSupplies />} />
        <Route path="/symbols" element={<Symbols />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/svg" element={<SvgIcons />} />
      </Routes>
      
      <div className="section">
        <h2>方法论</h2>
        <div className="method">
          <p>如果做不到一件事，不是因为自己不够自律，只是因为方法不对。</p>
        </div>
      </div>
      
      <div className="section">
        <h2>Q&A</h2>
        <div className="qa">
          <div className="qa-item">
            <h4>如何使用这些图标？</h4>
            <p>选择图标类型后，您可以浏览并复制所需的图标。</p>
          </div>
          <div className="qa-item">
            <h4>支持自定义图标吗？</h4>
            <p>目前不支持，但我们计划在未来版本中添加此功能。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileLayout;