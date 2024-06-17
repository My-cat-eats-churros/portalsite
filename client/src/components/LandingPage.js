import React, { useState } from 'react';
import MapContainer from './MapContainer';
import './LandingPage.css';

function LandingPage() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  }

  return (
    <div className="content">
      <div className="banner">
        <img alt="배너이미지" src="/dogbanner.png" />
        <h1>동물병원 / 매장</h1>
        <img alt="배너이미지" src="/catbanner.png" />
      </div>
      <div className="App">
        <form className="inputForm" onSubmit={handleSubmit}>
          <input placeholder="키워드를 입력하세요 (ex : 동물병원, 애견카페)" onChange={onChange} value={InputText} />
          <button type="submit">검색</button>
        </form>
        <MapContainer searchPlace={Place} />
      </div>
    </div>
  );
}

export default LandingPage;
