import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostGrid from "@/components/Main/PostGrid";
import InfoAuthor from "@/components/oneAuthor/InfoAuthor";

export default function OneAuthor() {
  return (
    <div className="OneAuthor">
      <Header />
      <InfoAuthor />
      <PostGrid />
      <Footer />
    </div>
  );
}