"use client";
import "./FeedComponent.css";
import FilterSection from "./FilterSection";
import PopularTags from "./PopularTags";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FeedTitle() {
  const pathname = usePathname();
  const isAuthorsPage = pathname === "/authors";
  return (
    <main className="content">
      <header className="header">
        <h1 className="title">
          <Link href={`/`}>
            <span className={`feedTitle ${!isAuthorsPage ? "active" : ""}`}>Лента</span>
          </Link>
          <Link href={`/authors`}>
            <span className={`subscriptionsTitle ${isAuthorsPage ? "active" : ""}`}>Авторы</span>
          </Link>
        </h1>
      </header>
      <FilterSection />
      <PopularTags />
    </main>
  );
}

