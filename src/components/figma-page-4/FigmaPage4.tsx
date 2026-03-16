import React from 'react';
import './FigmaPage4.scss';

// SVG Icons to replace local assets
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#EBEBEB"/>
    <path d="M15 9L9 15M9 9L15 15" stroke="#727780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.91663 7.58333L5.83329 10.5L11.6666 4.66667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33331 14.6667V2.66667C3.33331 2.31304 3.47379 1.97391 3.72384 1.72386C3.97389 1.47381 4.31302 1.33333 4.66665 1.33333H11.3333C11.6869 1.33333 12.0261 1.47381 12.2761 1.72386C12.5262 1.97391 12.6666 2.31304 12.6666 2.66667V14.6667L7.99998 11.3333L3.33331 14.6667Z" stroke="#727780" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AiIcon = ({ type = "line" }: { type?: "line" | "fill" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill={type === "fill" ? "#1A1A1A" : "transparent"}/>
    <path d="M12 6V18M8 10L12 6L16 10M8 14L12 18L16 14" stroke={type === "fill" ? "white" : "#1A1A1A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function NewsSummation() {
  return (
    <div className="fp4-news-summation">
      <div className="fp4-news-summation-content">
        <div className="fp4-news-summation-info">
          <div className="fp4-news-summation-header">
            <AiIcon type="fill" />
            <h3 className="fp4-news-summation-title">
              AI 뉴스 요약
            </h3>
          </div>
          <p className="fp4-news-summation-body">
            최근 2개의 ‘AI’ 관련 뉴스가 보도되었습니다. 주요 언론사인 서울경제, 딜사이트경제TV 등에서 이 주제에 대해 집중적으로 다루고 있으며, 가장 최근 기사는 서울 경제의 “삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화" 입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FigmaPage4() {
  const tabs = [
    { label: "반도체", active: true },
    { label: "AI기술동향", active: true },
    { label: "로보틱스", active: true },
    { label: "특화망사업", active: true },
    { label: "iOT 솔루션", active: true }
  ];

  const newsList = [
    { type: 'thumbnail', img: 'https://placehold.co/465x306' }, // Approximate 2x size for retina
    { type: 'text' },
    { type: 'text' },
    { type: 'thumbnail', img: 'https://placehold.co/465x306' },
  ];

  return (
    <div className="fp4-container">
      <section className="fp4-top-section">
        <div className="fp4-header-row">
          <h1 className="fp4-main-title">비즈 토픽</h1>
        </div>
      </section>

      <main className="fp4-main-content">
        <div className="fp4-curation-wrapper">
          <header className="fp4-curation-header">
            <div className="fp4-tabs-list">
              {tabs.map((tab, idx) => (
                <div key={idx} className={`fp4-tab-item ${idx % 2 === 0 ? "rotate-plus" : "rotate-minus"}`}>
                  <div className="fp4-tab-inner">
                    <span className="fp4-tab-label">{tab.label}</span>
                    <button className="fp4-tab-close-btn" aria-label="제거">
                      <CloseIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="fp4-finish-btn">
              <CheckIcon />
              <span>완료</span>
            </button>
          </header>

          <NewsSummation />

          <section className="fp4-news-section">
            <div className="fp4-news-grid">
              {newsList.map((news, idx) => (
                <article key={idx} className="fp4-news-card">
                  {news.type === 'thumbnail' && (
                    <div className="fp4-news-thumbnail-wrapper">
                      <img src={news.img} alt="" className="fp4-news-thumbnail" />
                    </div>
                  )}
                  <div className="fp4-news-card-body">
                    <div className="fp4-news-card-info">
                      <h2 className="fp4-news-card-title">
                        삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화
                      </h2>
                      <p className="fp4-news-card-snippet">
                        본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출
                      </p>
                      <time className="fp4-news-card-time">서울경제 · 32분 전</time>
                    </div>
                    <div className="fp4-news-card-actions">
                      <button className="fp4-icon-btn"><BookmarkIcon /></button>
                      <button className="fp4-icon-btn"><AiIcon /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
