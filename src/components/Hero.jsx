import dogImg from "../assets/dog.png";
import AnimatedBtn from "./shared/AnimatedBtn";
import UnderlineBtn from "./shared/UnderlineBtn";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row  justify-center items-center">
        <div className=" flex-1 my-5 md:my-0">
          <div className="px-3 md:px-0 max-w-xs mx-auto space-y-5 lg:space-y-12">
            <h2 className="text-[#C0345E] text-xs font-opensans">
              BRAND, DEV, ECOM, MARKETING
            </h2>
            <h3 className=" text-4xl font-semibold">
              <span className="text-[#19293A]"> We unleash</span> <br />
              <span className="text-[#506473]">business potential</span>{" "}
            </h3>
            <p className="text-[#506473] text-sm">
              We create brand experiences which are memorable and distinct. Our
              experienced team create and develop brands with personality and
              resonance.
            </p>

            <div className="font-semibold">
              <AnimatedBtn
                to={"#"}
                text={"Let's talk"}
                lineColor={"bg-[#C0345E]"}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 h-full min-h-screen">
          <img src={dogImg} alt="Dog" className="w-full h-screen" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
