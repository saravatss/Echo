'use client'
import "./ArticleHeader.css";
import Link from "next/link";

export default function ArticleHeader() {
  return (
    <div className="articleHeader">
      <Link href={`/`}>
        <nav className="articleBreadcrumbs">
          <img src="./arrow.svg" className="articleBackIcon" />
          <p>Назад на главную</p>
        </nav>
      </Link>

      <div className="articleContentWrapper">
        <h1 className="articleTitle">Материальная культура телеутов</h1>

        <aside className="articleMetaInfo">
          <p className="articleDate">12.11.24</p>
          <div className="readingTime">
            <span className="readingTimeLabel">Время чтения</span>
            <span className="readingTimeValue">1,5 мин</span>
          </div>
        </aside>
      </div>
    </div>
  );
};
