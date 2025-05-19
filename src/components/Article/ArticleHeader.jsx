'use client'
import "./ArticleHeader.css";

export default function ArticleHeader() {
  return (
    <div className="articleHeader">

      <div className="articleContentWrapper">
        <h1 className="articleTitle">Материальная культура телеутов</h1>

        <aside className="articleMetaInfo">
          <p className="articleDate">12 ноября 2024</p>
          <div className="readingTime">
            <span className="readingTimeLabel">Время чтения</span>
            <span className="readingTimeValue">1,5 мин</span>
          </div>
        </aside>
      </div>
    </div>
  );
};
