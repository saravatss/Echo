import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MapFeed from "@/components/Map";

export default function MapPage() {
  return (
    <div className="Map">
      <Header />
      <MapFeed />
      <Footer />
    </div>
  );
}