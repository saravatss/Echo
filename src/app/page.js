import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeedTitle from "@/components/Main/HeadPart/FeedTitle";
import PostGrid from "@/components/Main/PostGrid";


export default function HomePage() {
  return (
    <div>
      <Header />
      <FeedTitle />
      <PostGrid />
      <Footer />
    </div>
  );
}
