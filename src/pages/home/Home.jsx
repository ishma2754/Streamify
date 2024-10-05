import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,
} from "../../data";
import { fetchStreamifyData } from "../../features/streamifySlice";

const Home = () => {
  const dispatch = useDispatch();
  const revenueData = useSelector((state) => state.streamify.revenue)

  useEffect(() => {
    dispatch(fetchStreamifyData())
  })
  return (
    <div className="grid gap-5 grid-cols-4 auto-rows-[minmax(180px,_auto)]">
      <div className="box col-span-2 row-span-3 p-5 rounded-lg border border-soft-bg">
        <PieChartBox data={revenueData}/>
      </div>
      <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
        <ChartBox data={chartBoxUser} />
      </div>
      <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
        <ChartBox data={chartBoxProduct} />
      </div>
      <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
        <ChartBox data={chartBoxConversion} />
      </div>
      <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
        <ChartBox data={chartBoxRevenue} />
      </div>
      <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
        <BarChartBox data={barChartBoxVisit} />
      </div>
      <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
        <BarChartBox data={barChartBoxRevenue} />
      </div>
      <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
        <BarChartBox data={barChartBoxVisit} />
      </div>
      <div className="box col-span-1 p-3 rounded-lg border border-soft-bg">
        <BarChartBox data={barChartBoxRevenue} />
      </div>
      <div className="box col-span-2 row-span-3 p-5 rounded-lg border border-soft-bg">
        <TopBox />
      </div>
      <div className="box col-span-2 row-span-2 p-5 rounded-lg border border-soft-bg">
        <BigChartBox />
      </div>
    </div>
  );
};

export default Home;
