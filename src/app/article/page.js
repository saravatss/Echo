import styles from "@/page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/Article/ArticleHeader";
import History from "@/components/Article/ArticleContent/History";
import ArticleInfoBellow from "@/components/Article/ArticleInfoBellow/ArticleInfoBellow";

export default function Article() {
  return (
    <div className={styles["example-1"]}>
      <Header />
      <ArticleHeader />
      <History />
      <ArticleInfoBellow />
      <Footer />
    </div>
  );
}

