import RecentProjectsTabs from "./RecentProjectTabs";
import TitleFormate from "./TitleFormate";

const RecentProjects = () => {
  return (
    <div className="container mx-auto py-10 lg:py-28 px-5 md:px-10 max-w-5xl">
      <div className="mb-7">
        <TitleFormate upperTxt={"Some of our"} belowTxt={"recent projects"} />
      </div>
      <div className="">
        <RecentProjectsTabs />
      </div>
    </div>
  );
};

export default RecentProjects;
