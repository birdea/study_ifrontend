import React from 'react';
import './FigmaPage1.scss';

const imgShape = "http://localhost:3845/assets/2f7490d7d35be15248ac4e5527cf2bf2f900ae81.svg";
const imgShape1 = "http://localhost:3845/assets/7dac840aa56522f7d8f3ced1491137a14bffc5c6.svg";
const imgRectangle2147234812 = "http://localhost:3845/assets/0df81d5aafb5e86cfba280b95634bb0e3aae8dd4.png";
const imgRectangle2147234813 = "http://localhost:3845/assets/52aa40b6a3657b877d7c3730d06bb5a73228b07b.png";
const imgShape2 = "http://localhost:3845/assets/4bc48ca5206fd626ee1dd72d5b05e5a7a959806e.svg";
const imgShape3 = "http://localhost:3845/assets/e4759ecdc6fc5bfdd1d80cad4e28a74033f48db1.svg";
const imgRectangle1664128615Stroke = "http://localhost:3845/assets/96fa66e8bb71515f82a795540ecd95c33ee9c6bf.svg";
const imgShape4 = "http://localhost:3845/assets/68f13760bd79aee271979f9169ba9bd00464453c.svg";
const imgRectangle1664128615Stroke1 = "http://localhost:3845/assets/4af0391795035932fdf88473d8d94ea04ae07e93.svg";

type Icons1SystemAiProps = {
  className?: string;
  type?: "line" | "fill";
};

function Icons1SystemAi({ className, type = "line" }: Icons1SystemAiProps) {
  const isFill = type === "fill";
  return (
    <div className={`icons-ai-container ${className || ""}`}>
      <div className={`icons-ai-inner ${isFill ? "fill" : "line"}`}>
        <img alt="" className="icons-ai-img" src={isFill ? imgShape1 : imgShape} />
      </div>
    </div>
  );
}

function NewsSummation({ className }: { className?: string }) {
  return (
    <div className={`news-summation ${className || ""}`}>
      <div className="news-summation-content">
        <div className="news-summation-info">
          <div className="news-summation-header">
            <Icons1SystemAi className="ai-icon" type="fill" />
            <p className="news-summation-title">
              AI 뉴스 요약
            </p>
          </div>
          <p className="news-summation-body">{`최근 2개의 ‘AI’ 관련 뉴스가 보도되었습니다. 주요 언론사인 서울경제, 딜사이트경제TV 등에서 이 주제에 대해 집중적으로 다루고 있으며, 가장 최근 기사는 서울 경제의 “삼성전자, AI 반도체  신기술 공개...글로벌 시장 공략 본격화" 입니다.`}</p>
        </div>
      </div>
    </div>
  );
}

export default function FigmaPage1() {
  const tabs = ["반도체", "AI기술동향", "로보틱스", "특화망사업", "iOT 솔루션"];

  const notesItems = [
    { type: 'thumbnail', img: imgRectangle2147234812 },
    { type: 'text' },
    { type: 'text' },
    { type: 'thumbnail', img: imgRectangle2147234813 },
    { type: 'text' },
    { type: 'thumbnail', img: imgRectangle2147234812 }
  ];

  return (
    <div className="figma-page-1-wrapper">
      <div className="page-header">
        <div className="page-title-container">
          <div className="page-title-box">
            <p className="page-title">비즈 토픽</p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="news-curation">
          
          <div className="tabs-container">
            <div className="suggestion-tags">
              {tabs.map((tab, idx) => (
                <div key={idx} className="suggestion-item">
                  <div className="suggestion-tag">
                    <p className="suggestion-tag-text">{tab}</p>
                    <div className="suggestion-tag-icon">
                      <img alt="" className="close-icon" src={imgShape2} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="biz-btn">
              <div className="biz-btn-icon">
                <img alt="" className="check-icon" src={imgShape3} />
              </div>
              <p className="biz-btn-text">완료</p>
            </div>
          </div>

          <NewsSummation className="news-summation-wrapper" />

          <div className="news-list">
            {notesItems.map((item, idx) => (
              <div key={idx} className="news-card">
                {item.type === 'thumbnail' && (
                  <div className="news-thumbnail-box">
                    <img alt="" className="news-thumbnail" src={item.img} />
                  </div>
                )}
                
                <div className="news-text-content">
                  <div className="news-info-box">
                    <p className="news-title">
                      삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화
                    </p>
                    <p className="news-snippet">
                      본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출
                    </p>
                    <p className="news-meta">
                      서울경제 · 32분 전
                    </p>
                  </div>
                  
                  <div className="news-icons">
                    <div className="news-icon-btn">
                      <div className="icon-bookmark">
                        <img alt="" className="bookmark-img" src={imgRectangle1664128615Stroke1} />
                      </div>
                    </div>
                    <div className="news-icon-btn">
                      <div className="icon-ai">
                        <img alt="" className="ai-img" src={imgShape4} />
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
