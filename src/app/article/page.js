"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/Article/ArticleHeader";
import History from "@/components/Article/ArticleContent/History";
import ArticleInfoBellow from "@/components/Article/ArticleInfoBellow/ArticleInfoBellow";
import "@/components/Article/ArticleInfoBellow/PostsArticle.css"
import PostsArticle from "@/components/Article/ArticleInfoBellow/PostsArticle";

export default function Article() {
  return (
    <div className="Article">
      <Header />
      <ArticleHeader />
      <History />
      <ArticleInfoBellow />
      <PostsArticle />
      <Footer />
    </div>
  );
}

