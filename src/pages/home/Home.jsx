import { useSelector } from "react-redux";
import { BarChartBox, BigChartBox, ChartBox, PieChartBox, TopBox } from "../../components/index";

const Home = () => {
  const { data } = useSelector((state) => state.streamify);
  const hasData = data && Object.keys(data).length > 0;

  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,_auto)] font-poppins">
      {hasData ? (
        <>
          <div className="col-span-1 sm:col-span-2 row-span-3 bg-white bg-opacity-50 shadow-lg rounded-lg p-5 border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
            <PieChartBox />
          </div>
          <div className="box col-span-1 p-3 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
            <ChartBox data={data.active_users} />
          </div>
          <div className="box col-span-1 p-3 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
            <ChartBox data={data.registered_users} />
          </div>
          <div className="box lg:col-span-2 col-span-1 p-3 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
            <ChartBox data={data.streams} />
          </div>
          <div className="box col-span-1 sm:col-span-2 row-span-3 p-5 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
            <TopBox />
          </div>
          <div className="box col-span-1 sm:col-span-2 row-span-2 p-5 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
            <BarChartBox />
          </div>
          <div className="box col-span-1 sm:col-span-2 row-span-2 p-5 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
            <BigChartBox />
          </div>
        </>
      ) : (
        <div className="text-center col-span-4">
          <h2>No data available</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
