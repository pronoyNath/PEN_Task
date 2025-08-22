import { categories, footerList } from "../utils/db";
import { CategoryList } from "./CategoryList";
import { FooterList } from "./FooterList";
import TitleFormate from "./TitleFormate";
import AnimatedBtn from "./shared/AnimatedBtn";

const Footer = () => {
    const data = footerList || [];
  return (
    <div className="bg-[#EDEFF1]">
      <div className="container mx-auto py-10 lg:py-32">
        <div className="flex flex-col md:flex-row  justify-center items-center">
          <div className="flex-1">
            <div className=" px-3 md:px-0 max-w-xs mx-auto space-y-5 lg:space-y-12">
              <TitleFormate upperTxt={"We’re a brands"} belowTxt={"best friend"} />
             

              <div className="font-semibold">
                <AnimatedBtn
                  to={"#"}
                  text={"Let's talk"}
                  lineColor={"bg-[#C0345E]"}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-10 pt-10 lg:pt-0 h-full w-full">
            <div className="flex-1 flex gap-10 ">
              <FooterList categories={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
