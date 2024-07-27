const BottomSection = () => {
  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="w-32 h-12 bg-gray-600 border border-gray-300 rounded-2xl"></th>
            <th className="w-32 h-12 bg-gray-800 border border-gray-300 rounded-2xl"></th>
            <th className="w-32 h-12 bg-gray-600 border border-gray-300 rounded-2xl"></th>
            <th className="w-32 h-12 bg-gray-800 border border-gray-300 rounded-2xl"></th>
            <th className="w-32 h-12 bg-gray-600 border border-gray-300 rounded-2xl"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
          </tr>
          <tr>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
          </tr>
          <tr>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
          </tr>
          <tr>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
          </tr>
          <tr>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-800 border-4 border-gray-300"></td>
            <td className="w-32 h-12 bg-gray-600 border-4 border-gray-300"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="w-[70%] bg-gray-400 p-4">
      <div className="flex flex-col gap-2">
        <div className="mb-4">
          <div className="w-[150px] h-[50px] bg-slate-600 rounded-xl"></div>
        </div>
        <div className="w-[180px] h-[10px] bg-gray-500 rounded-lg"></div>
        <div className="w-[180px] h-[10px] bg-gray-500 rounded-lg"></div>
        <div className="w-[180px] h-[10px] bg-gray-500 rounded-lg"></div>
        <div className="w-[180px] h-[10px] bg-gray-500 rounded-lg"></div>
        <div className="w-[180px] h-[10px] bg-gray-500 rounded-lg"></div>
      </div>
    </div>
  );
};

const ChartDetail = () => {
  return <div className="bg-cyan-500 w-[100%]">CHART DETAIL</div>;
};

const SideBar = () => {
  return (
    <div className="bg-gray-500 w-[23%] p-6 min-h-screen">
      <div className="flex flex-col gap-2">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </div>
    </div>
  );
};

const SidebarItem = () => {
  return <div className="w-[200px] h-[40px] bg-gray-800 rounded-lg"></div>;
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
      <main className="flex">
        <SideBar />
        <div>
          <div>
            <div className="flex w-[850px] h-[400px]">
              <ChartDetail />
              <RightSection />
            </div>
          </div>
          <BottomSection />
        </div>
      </main>
    </div>
  );
};

export default ChartDasboard;
