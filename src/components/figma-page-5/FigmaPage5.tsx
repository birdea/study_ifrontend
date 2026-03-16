import React from 'react';
import './FigmaPage5.scss';

/* ─── SVG Icons ─────────────────────────────────────────────────────────── */

/** 닫기 원형 (close_circle) — 탭 칩 제거 버튼 */
const CloseCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#EBEBEB" />
    <path
      d="M14.5 9.5L9.5 14.5M9.5 9.5L14.5 14.5"
      stroke="#727780"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** 체크 (check) — 완료 버튼 내부 */
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.91663 7.58333L5.83329 10.5L11.6666 4.66667"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** AI 아이콘 — fill(검정 원+흰색 경로) / line(경로만) */
const AiIcon = ({ type = 'line' }: { type?: 'fill' | 'line' }) => {
  const isFill = type === 'fill';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {isFill && <rect width="24" height="24" rx="12" fill="#1A1A1A" />}
      <path
        d="M12 5L13.5 9.5L18 11L13.5 12.5L12 17L10.5 12.5L6 11L10.5 9.5L12 5Z"
        stroke={isFill ? 'white' : '#727780'}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={isFill ? 'white' : 'none'}
      />
    </svg>
  );
};

/** 북마크 아이콘 */
const BookmarkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.33337 14.6667V2.66667C3.33337 2.31304 3.47385 1.97391 3.7239 1.72386C3.97395 1.47381 4.31308 1.33333 4.66671 1.33333H11.3334C11.687 1.33333 12.0261 1.47381 12.2762 1.72386C12.5262 1.97391 12.6667 2.31304 12.6667 2.66667V14.6667L8.00004 11.3333L3.33337 14.6667Z"
      stroke="#727780"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────── */

const TAB_CHIPS = [
  { label: '반도체' },
  { label: 'AI기술동향' },
  { label: '로보틱스' },
  { label: '특화망사업' },
  { label: 'iOT 솔루션' },
];

type NewsCardData =
  | { type: 'thumbnail'; img: string; title: string; snippet: string; time: string }
  | { type: 'text'; title: string; snippet: string; time: string };

const NEWS_LIST: NewsCardData[] = [
  {
    type: 'thumbnail',
    img: 'https://placehold.co/465x306/c0c8d0/ffffff?text=Samsung',
    title: '삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화',
    snippet: '본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출',
    time: '서울경제 · 32분 전',
  },
  {
    type: 'text',
    title: '삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화',
    snippet: '본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출',
    time: '서울경제 · 32분 전',
  },
  {
    type: 'text',
    title: '삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화',
    snippet: '본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출',
    time: '서울경제 · 32분 전',
  },
  {
    type: 'thumbnail',
    img: 'https://placehold.co/465x306/2a3d5a/ffffff?text=AI+Robot',
    title: '삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화',
    snippet: '본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출',
    time: '서울경제 · 32분 전',
  },
  {
    type: 'text',
    title: '삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화',
    snippet: '본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출',
    time: '서울경제 · 32분 전',
  },
  {
    type: 'thumbnail',
    img: 'https://placehold.co/465x306/c0c8d0/ffffff?text=Samsung',
    title: '삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화',
    snippet: '본문 최대 2줄 노출 본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출본문 최대 2줄 노출',
    time: '서울경제 · 32분 전',
  },
];

/* ─── Sub-components ─────────────────────────────────────── */

function SummaryBox() {
  return (
    <div className="fp5-summary-box">
      <div className="fp5-summary-content">
        <div className="fp5-summary-header">
          <AiIcon type="fill" />
          <h3 className="fp5-summary-title">AI 뉴스 요약</h3>
        </div>
        <p className="fp5-summary-body">
          {`최근 2개의 'AI' 관련 뉴스가 보도되었습니다. 주요 언론사인 서울경제, 딜사이트경제TV 등에서 이 주제에 대해 집중적으로 다루고 있으며, 가장 최근 기사는 서울 경제의 "삼성전자, AI 반도체 신기술 공개...글로벌 시장 공략 본격화" 입니다.`}
        </p>
      </div>
    </div>
  );
}

function NewsCardActions() {
  return (
    <div className="fp5-news-actions">
      <button className="fp5-icon-btn" aria-label="북마크">
        <BookmarkIcon />
      </button>
      <button className="fp5-icon-btn" aria-label="AI 요약">
        <AiIcon type="line" />
      </button>
    </div>
  );
}

function NewsCardTextBody({
  title,
  snippet,
  time,
}: {
  title: string;
  snippet: string;
  time: string;
}) {
  return (
    <div className="fp5-news-body">
      <div className="fp5-news-info">
        <div className="fp5-news-text-group">
          <p className="fp5-news-title">{title}</p>
          <p className="fp5-news-snippet">{snippet}</p>
        </div>
        <p className="fp5-news-time">{time}</p>
      </div>
      <NewsCardActions />
    </div>
  );
}

function NewsCard({ card }: { card: NewsCardData }) {
  return (
    <article className="fp5-news-card">
      {card.type === 'thumbnail' && (
        <div className="fp5-news-thumbnail-wrap">
          <img src={card.img} alt="" className="fp5-news-thumbnail" />
        </div>
      )}
      <NewsCardTextBody title={card.title} snippet={card.snippet} time={card.time} />
    </article>
  );
}

/* ─── Page Root ──────────────────────────────────────────── */

export default function FigmaPage5() {
  return (
    <div className="fp5-container">
      {/* Title */}
      <section className="fp5-title-section">
        <div className="fp5-title-inner">
          <h1 className="fp5-main-title">비즈 토픽</h1>
        </div>
      </section>

      {/* Main */}
      <main className="fp5-main-content">
        <div className="fp5-curation-wrapper">

          {/* Tab row */}
          <div className="fp5-tab-row">
            <div className="fp5-tab-chips">
              {TAB_CHIPS.map((chip, idx) => (
                <div
                  key={idx}
                  className={`fp5-tab-chip ${idx % 2 === 0 ? 'fp5-tab-chip--plus' : 'fp5-tab-chip--minus'}`}
                >
                  <div className="fp5-tab-chip-inner">
                    <span className="fp5-tab-chip-label">{chip.label}</span>
                    <button className="fp5-tab-chip-close" aria-label={`${chip.label} 제거`}>
                      <CloseCircleIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="fp5-done-btn">
              <CheckIcon />
              <span>완료</span>
            </button>
          </div>

          {/* AI Summary */}
          <SummaryBox />

          {/* News list */}
          <div className="fp5-news-list">
            {NEWS_LIST.map((card, idx) => (
              <NewsCard key={idx} card={card} />
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
