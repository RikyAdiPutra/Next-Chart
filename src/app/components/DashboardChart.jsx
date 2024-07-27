const BottomSection = () => {
  return <div>BOTTOM SECTION</div>;
};

const RightSection = () => {
  return <div>RIGHT SECTION</div>;
};

const ChartDetail = () => {
  return <div>CHART DETAIL</div>;
};

const SideBar = () => {
  return <div>SIDEBAR</div>;
};

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-4 flex justify-between">
      <div className="w-[120px] h-[40px] bg-gray-700 rounded-lg"></div>
      <div className="flex gap-2 items-end">
        <div className="w-[25px] h-[25px] rounded-full bg-gray-700"></div>
        <div className="w-[25px] h-[25px] rounded-full bg-gray-700"></div>
        <div className="w-[35px] h-[35px] rounded-full bg-gray-700"></div>
      </div>
    </div>
  );
};

const ChartDasboard = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Navbar />
      {/* <main className="flex">
        <SideBar />
        <div>
          <div className="flex">
            <ChartDetail />
            <RightSection />
          </div>
          <BottomSection />
        </div>
      </main> */}
    </div>
  );
};

export default ChartDasboard;
