import React, { useState } from "react";
import './Mypage.css';

const Mypage = () => {
    const [profileImage, setProfileImage] = useState('default-profile-img.png');
    const [username, setUsername] = useState('user1'); //기본 사용자 이름인데 이거 이쁘게 비꾸고싶음
    const [status, setStatus] = useState('자신의 동물을 소개해보세요') //기본 상태메세지
    const [activityLog, setActivityLog] = useState([
        '자신의 동물을 기록해보세요',
        'ex) 23.02.20 @@이 첫 예방접종',
    ]) //기본 활동 기록이요
    
    const [newActivity, setNewActivity] = useState('') //새활동 기록 입력 필드 상태

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value );
    };

    const handleNewActivityChange = (event) => {
        setNewActivity(event.target.value);
    };

    const handleAddActivity = () => {
        if (newActivity.trim()) {
            setActivityLog([...activityLog, newActivity]);
            setNewActivity('');
        }
    };

    const handleDeleteActivity = (index) => {
        setActivityLog(activityLog.filter((_, i)=> i !==index));
    };

    return (
        <div className="my-page">
<header>
        <a href="#" id="logo">
          <img alt="헤더 이미지" className="header-image" src="/CHRURUP.png" />
        </a>
        <nav>
          <a href="#">동물병원/매장</a>
          <a href="#">질병 검색</a>
          <a href="#">SNS</a>
        </nav>
        <div className="login-container">
          <a href="/Login">로그인</a>
          <a href="/Membership">회원가입</a>
        </div>
      </header>
      <main className="profile-section">
        <div className="profile-box">
        <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image"/>
            <input type="file" accept="image/*" onChange={handleImageChange}/>            
        </div>
        <div className="profile-info">
            <input
            type="text"
            value={username}
            onChange={handleImageChange}
            className="username-input"/>
            <textarea
            value={status}
            onChange={handleStatusChange}
            className="status-input"
            />
            <div className="activity-log">
                {activityLog.map((activity, index)=> (
                    <div key={index} className="activity-item">
                        <p>{activity}</p>
                        <button
                        onClick={() => handleDeleteActivity(index)}
                        className="delete-activity-button"
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>
            <div className="new-activity">
                <input
                type="text"
                value={newActivity}
                onChange={handleNewActivityChange}
                className="new-activity-input"
                placeholder="새 활동 기록 입력"
                />
                <button onClick={handleAddActivity} className="add-activity-button">
                    추가
                </button>
                </div>
            </div>
        </div>
      </main>
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
      /</div>
    )
}

export default Mypage