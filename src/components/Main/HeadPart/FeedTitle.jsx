"use client";
import "./FeedComponent.css";
import FilterSection from "./FilterSection";
import PopularTags from "./PopularTags";

export default function FeedTitle() {
  return (
    <main className="content">
      <header className="header">
        <h1 className="title">
          <span className="feedTitle">Лента</span>
          <span className="subscriptionsTitle">Подписки</span>
        </h1>
      </header>
      <FilterSection />
      <PopularTags />
    </main>
  );
}

