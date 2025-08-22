import CapableOf from "../components/CapableOf";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className=" mx-auto">
      <Header />
      <main>
        <Hero />
        <CapableOf/>
        <div className="bg-yellow-50 min-h-[300px]"></div>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
