import { categories } from "../utils/db";
import { CategoryList } from "./CategoryList";
import TitleFormate from "./TitleFormate";
import AnimatedBtn from "./shared/AnimatedBtn";

const CapableOf = () => {
    const data = categories || [];
  return (
    <div className="bg-[#EDEFF1]">
      <div className="container mx-auto py-10 lg:py-32">
        <div className="flex flex-col md:flex-row  justify-center items-center">
          <div className="flex-1">
            <div className=" px-3 md:px-0 max-w-xs mx-auto space-y-5 lg:space-y-12">
              <TitleFormate upperTxt={"What are"} belowTxt={"we capable of"} />
              <p className="text-[#506473] text-sm">
                By focusing on design as an enabler and putting a huge emphasis
                on our clients as co-producers, we create innovative,
                sustainable marketing that enhances brand experience and user
                engagement.
              </p>

              <div className="font-semibold">
                <AnimatedBtn
                  to={"#"}
                  text={"Our process"}
                  lineColor={"bg-[#C0345E]"}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-10 pt-10 lg:pt-0 h-full w-full">
            <div className="flex-1 flex gap-10 ">
              <CategoryList categories={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapableOf;
