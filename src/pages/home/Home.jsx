import {  useSelector } from "react-redux";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";


const Home = () => {
  const { data} = useSelector((state) => state.streamify);
  
  const hasData = data && Object.keys(data).length > 0;

  return (
    <div className="grid gap-5 grid-cols-4 auto-rows-[minmax(180px,_auto)]">
      {hasData ? (
        <>
          <div className="box col-span-2 row-span-3 p-5 rounded-lg border border-soft-bg">
            <PieChartBox />
          </div>
          <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
            <ChartBox data={data.active_users} />
          </div>
          <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
            <ChartBox data={data.registered_users} />
          </div>
          <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
            <ChartBox data={data.streams} />
          </div>
          <div className="box col-span-2 row-span-3 p-5 rounded-lg border border-soft-bg">
            <TopBox />
          </div>
          <div className="box col-span-2 row-span-2 p-5 rounded-lg border border-soft-bg">
            <BarChartBox />
          </div>
          <div className="box col-span-2 row-span-2 p-5 rounded-lg border border-soft-bg">
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
