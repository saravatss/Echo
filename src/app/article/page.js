"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/Article/ArticleHeader";
import History from "@/components/Article/ArticleContent/History";
import ArticleInfoBellow from "@/components/Article/ArticleInfoBellow/ArticleInfoBellow";
import "./article.css"

export default function Article() {
  return (
    <div className="Article">
      <Header />
      <ArticleHeader />
      <History />
      <ArticleInfoBellow />
      <Footer />
    </div>
  );
}

