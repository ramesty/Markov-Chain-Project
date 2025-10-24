
import SideBarLayout from "./SideBarLayout"
import OutputLayout from "./OutputLayout"

function HomeLayout() {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-800 min-w-[850px] border border-white flex px-8">
      <div className="w-[250px] bg-blue-600 flex-shrink-0">
        <SideBarLayout />
      </div>
      <div className="flex-grow min-w-[250px] bg-cyan-600 border border-white">
        <OutputLayout />
      </div>
    </div>
  );
}

export default HomeLayout;