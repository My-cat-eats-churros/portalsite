import React, { useState } from 'react';
import './Disease.css';

const Disease = () => {
  const [step, setStep] = useState(1);
  const [symptoms, setSymptoms] = useState({
    step1: '',
    step2: '',
    step3: ''
  });

  const handleSymptomsChange = (stepNumber, value) => {
    setSymptoms({
      ...symptoms,
      [`step${stepNumber}`]: value
    });

    if (stepNumber < 3) {
      setStep(stepNumber + 1);
    }
  };

  const handleComplete = () => {
    setStep(4);
  };

  const Result = ({ symptoms }) => {
    const { step1, step2, step3 } = symptoms;

    const diagnosis = {
      '눈 이상': {
        '눈이 벌겋게 붓는다': {
          '눈 주위 털이 빠진다': {
            name: '알레르기성 안검염',
            description: '눈꺼풀이 알레르기 반응으로 붓는 질병입니다.',
            image: '/diseaseimages/eyes1.png'
          },
          '바닥이나 발을 이용해 귀를 긁는다': {
            name: '알레르기성 안검염',
            description: '눈꺼풀이 알레르기 반응으로 붓는 질병입니다.',
            image: '/diseaseimages/eyes1.png'
          },
          '고름과 같은 분비물이 나온다': {
            name: '세균성 안검염',
            description: '눈꺼풀에 염증이 생겨 붉어지고 부어오를 증상을 동반합니다.',
            image: '/diseaseimages/eyes2.png'
          },
          '눈꺼풀에 다래끼 같은 것이 생긴다': {
            name: '세균성 안검염',
            description: '눈꺼풀에 염증이 생겨 붉어지고 부어오를 증상을 동반합니다.',
            image: '/diseaseimages/eyes2.png'
          }
        },
        '눈이 가렵다': {
          '눈 주위 털이 빠진다': {
            name: '건조성 각결막염',
            description: '눈이 건조해져서 생기는 염증입니다.',
            image: '/images/dry_eye.jpg'
          },
          '눈에 고름이 난다': {
            name: '포도막염',
            description: '눈의 내부 구조가 염증에 의해 붓는 질병입니다.',
            image: '/images/uveitis.jpg'
          }
        }
      }
    };

    const result = diagnosis[step1]?.[step2]?.[step3] || {
      name: '알 수 없는 질병',
      description: '해당 증상에 대한 정보를 찾을 수 없습니다.',
      image: '/images/default.jpg'
    };

    return (
      <div className="disease">
        <h6>결과</h6>
        <p>선택한 증상:</p>
        <ul>
          <li>카테고리: {step1}</li>
          <li>증상 1: {step2}</li>
          <li>증상 2: {step3}</li>
        </ul>
        <div className="disease-info">
          <h6>{result.name}</h6>
          <p>{result.description}</p>
          <img src={result.image} alt={result.name} className="disease-image" />
        </div>
      </div>
    );
  };

  const Step1 = ({ nextStep, selected }) => {
    const selectCategory = (value) => {
      nextStep(1, value);
    };

    return (
      <div className="category-box">
        <h6>1단계: 증상 카테고리 선택</h6>
        <div className="button-group">
          <button className={selected === '눈 이상' ? 'selected' : ''} onClick={() => selectCategory('눈 이상')}>
            눈 이상
          </button>
          <button className={selected === '귀 이상' ? 'selected' : ''} onClick={() => selectCategory('귀 이상')}>
            귀 이상
          </button>
          <button className={selected === '행동 이상' ? 'selected' : ''} onClick={() => selectCategory('행동 이상')}>
            행동 이상
          </button>
        </div>
      </div>
    );
  };

  const Step2 = ({ nextStep, selected }) => {
    const selectSymptom1 = (value) => {
      nextStep(2, value);
    };

    return (
      <div className="category-box">
        <h6>2단계: 증상 선택</h6>
        <div className="button-group">
          <button
            className={selected === '눈이 벌겋게 붓는다' ? 'selected' : ''}
            onClick={() => selectSymptom1('눈이 벌겋게 붓는다')}
          >
            눈이 벌겋게 붓는다
          </button>
          <button
            className={selected === '눈을 자주 찌푸린다' ? 'selected' : ''}
            onClick={() => selectSymptom1('눈을 자주 찌푸린다')}
          >
            눈을 자주 찌푸린다
          </button>
        </div>
      </div>
    );
  };

  const Step3 = ({ nextStep, selected }) => {
    const selectSymptom2 = (value) => {
      nextStep(3, value);
    };

    return (
      <div className="category-box">
        <h6>3단계: 추가 증상 선택</h6>
        <div className="button-group">
          <button
            className={selected === '눈 주위 털이 빠진다' ? 'selected' : ''}
            onClick={() => selectSymptom2('눈 주위 털이 빠진다')}
          >
            눈 주위 털이 빠진다
          </button>
          <button
            className={selected === '바닥이나 발을 이용해 귀를 긁는다' ? 'selected' : ''}
            onClick={() => selectSymptom2('바닥이나 발을 이용해 귀를 긁는다')}
          >
            바닥이나 발을 이용해 귀를 긁는다
          </button>
          <button
            className={selected === '고름과 같은 분비물이 나온다' ? 'selected' : ''}
            onClick={() => selectSymptom2('고름과 같은 분비물이 나온다')}
          >
            고름과 같은 분비물이 나온다
          </button>
          <button
            className={selected === '눈꺼풀에 다래끼 같은 것이 생긴다' ? 'selected' : ''}
            onClick={() => selectSymptom2('눈꺼풀에 다래끼 같은 것이 생긴다')}
          >
            눈꺼풀에 다래끼 같은 것이 생긴다
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="content">
      <div className="banner">
        <img alt="배너이미지" src="/dogbanner.png" />
        <h1>증상별 질병 검색</h1>
        <img alt="배너이미지" src="/catbanner.png" />
      </div>
      <div className="container">
        <div className="steps">
          {step >= 1 && (
            <div className="step">
              <Step1 nextStep={handleSymptomsChange} selected={symptoms.step1} />
            </div>
          )}
          {step >= 2 && (
            <div className="step">
              <Step2 nextStep={handleSymptomsChange} selected={symptoms.step2} />
            </div>
          )}
          {step >= 3 && (
            <>
              <div className="step">
                <Step3 nextStep={handleSymptomsChange} selected={symptoms.step3} />
              </div>
              <div className="complete-container">
                <button className="complete-button" onClick={handleComplete}>
                  선택완료
                </button>
              </div>
            </>
          )}
          {step >= 4 && (
            <div className="result">
              <Result symptoms={symptoms} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Disease;

