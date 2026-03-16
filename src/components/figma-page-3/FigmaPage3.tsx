import React from 'react';
import './FigmaPage3.scss';

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

function NewsSummation({ className }: { className?: string }) {
  return (
    <div className={`fp3-news-summation-wrapper ${className || ""}`}>
      <div className="fp3-news-summation-content">
        <div className="fp3-news-summation-info">
          <div className="fp3-news-summation-header">
            <AiIcon type="fill" />
            <p className="fp3-news-summation-title">
              AI 뉴스 요약
            </p>
          </div>
          <p className="fp3-news-summation-body">{`최근 2개의 ‘AI’ 관련 뉴스가 보도되었습니다. 주요 언론사인 서울경제, 딜사이트경제TV 등에서 이 주제에 대해 집중적으로 다루고 있으며, 가장 최근 기사는 서울 경제의 “삼성전자, AI 반도체  신기술 공개...글로벌 시장 공략 본격화" 입니다.`}</p>
        </div>
      </div>
    </div>
  );
}

export default function FigmaPage3() {
  const tabs = [
    { label: "반도체", rotation: "3deg" },
    { label: "AI기술동향", rotation: "-3deg" },
    { label: "로보틱스", rotation: "3deg" },
    { label: "특화망사업", rotation: "-3deg" },
    { label: "iOT 솔루션", rotation: "3deg" }
  ];

  const notesItems = [
    { type: 'thumbnail', img: 'https://placehold.co/233x153/png' },
    { type: 'text' },
    { type: 'text' },
    { type: 'thumbnail', img: 'https://placehold.co/233x153/png' },
    { type: 'text' },
    { type: 'thumbnail', img: 'https://placehold.co/233x153/png' }
  ];

  return (
    <div className="fp3-wrapper">
      <div className="fp3-header">
        <div className="fp3-title-container">
          <div className="fp3-title-box">
            <p className="fp3-title">비즈 토픽</p>
          </div>
        </div>
      </div>
      
      <div className="fp3-content">
        <div className="fp3-curation">
          
          <div className="fp3-tabs-container">
            <div className="fp3-suggestion-tags">
              {tabs.map((tab, idx) => (
                <div key={idx} style={{ padding: 4 }}>
                  <div className="fp3-suggestion-tag" style={{ transform: `rotate(${tab.rotation})` }}>
                    <p className="fp3-suggestion-tag-text">{tab.label}</p>
                    <div className="fp3-suggestion-tag-icon">
                      <CloseIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="fp3-biz-btn">
              <div className="fp3-biz-btn-icon">
                <CheckIcon />
              </div>
              <p className="fp3-biz-btn-text">완료</p>
            </div>
          </div>

          <NewsSummation />

          <div className="fp3-news-list">
            {notesItems.map((item, idx) => (
              <div key={idx} className="fp3-news-card">
                {item.type === 'thumbnail' && (
                  <div className="fp3-news-thumbnail-box">
                    <img alt="" className="fp3-news-thumbnail" src={item.img} />
                  </div>
                )}
                
                <div className="fp3-news-text-content">
                  <div className="fp3-news-info-box">
                    <div className="fp3-news-info-top">
                      <p className="fp3-news-title">
                        삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화
                      </p>
                      <p className="fp3-news-snippet">
                        본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출
                      </p>
                    </div>
                    <p className="fp3-news-meta">
                      서울경제 · 32분 전
                    </p>
                  </div>
                  
                  <div className="fp3-news-icons">
                    <div className="fp3-news-icon-btn">
                      <div className="fp3-icon-bookmark">
                        <BookmarkIcon />
                      </div>
                    </div>
                    <div className="fp3-news-icon-btn">
                      <div className="fp3-icon-ai">
                        <AiIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
