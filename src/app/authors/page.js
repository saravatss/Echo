import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedTitle from "@/components/Main/HeadPart/FeedTitle";
import AuthorsContent from "@/components/Authors/Authors";

export default function Authors() {
  return (
    <div className="Authors">
      <Header />
      <FeedTitle />
      <AuthorsContent />
      <Footer />
    </div>
  );
}