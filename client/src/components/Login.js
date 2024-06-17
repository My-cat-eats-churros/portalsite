import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="content">
      <div className="banner">
        <img alt="배너이미지" src="/dogbanner.png" />
        <h1>로그인</h1>
        <img alt="배너이미지" src="/catbanner.png" />
      </div>
      <div className="login-box">
        <div className="login-left">
          <h1>LOGIN</h1>
          <p>서비스를 이용하시기 위해서는 로그인을 하셔야 됩니다. 가입하신 아이디와 비밀번호를 입력해주세요.</p>
        </div>
        <div className="login-right">
          <form id="login-form">
            <label htmlFor="username">아이디</label>
            <input id="username" name="username" required type="text" />
            <label htmlFor="password">비밀번호</label>
            <input id="password" name="password" required type="password" />
            <button type="submit">로그인</button>
            <button
              onClick={() => window.location.href = '/membership'}
              type="button"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
