import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 하나의 import 문으로 합치기
import Login from './components/Login';
import Membership from './components/Membership';
import Membership2 from './components/Membership2';
import Mypage from './components/Mypage';
import LandingPage from './components/LandingPage';
import Disease from './components/Disease';
import Homepage from './components/Homepage';

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <a href="/" id="logo">
          <img alt="헤더 이미지" className="header-image" src="/CHRURUP.png" />
        </a>
        <nav>
          <a href="/LandingPage">동물병원/매장</a>
          <a href="/Disease">질병 검색</a>
          <a href="#">SNS</a>
        </nav>
        <div className="login-container">
          <a href="/login">로그인</a>
          <a href="/membership">회원가입</a>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/membership2" element={<Membership2 />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Disease" element={<Disease />} />
        <Route path='/homepage' element={<Homepage/>}/>
      </Routes>
      <footer>
        <div className="footer-contents">
          <div className="footer-links">
            <a href="#">개인정보처리방침</a>
            <a href="#">이메일추출방지정책</a>
          </div>
          <div className="owner">
            대표 : 신명진 <span className="pipe" /> 전화번호 : 031.xxx.xxxx
          </div>
          <div className="copyright">
            © 2024 CHURURUP. All rights reserved.
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;

