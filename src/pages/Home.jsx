import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className=" mx-auto">
      <Header />
      {/* Only push content down on mobile (<= xl). On desktop, transparent header overlays hero */}
      <main className="">
        <Hero />
        <div className="bg-yellow-50 min-h-screen"></div>
      </main>
    </div>
  );
};

export default Home;
