import { useSelector } from "react-redux";
import UserActivityHeatmap from "../../components/users/barChart/UserActivityHeatmap";
import UserDemographicsChart from "../../components/users/pieChart/UserDemographicsChart";
import ChannelPerformanceChart from "../../components/users/pieChart/ChannelPerformanceChart";
import UserSegmentation from "../../components/users/radarChart/UserSegmentation";
import UserRetentionChart from "../../components/users/lineChart/UserRetentionChart";
const Users = () => {
  const { data } = useSelector((state) => state.streamify);
  const hasData = data && Object.keys(data).length > 0;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-100 mb-6">
        Users Analytics Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {hasData ? (
          <>
            <div className="bg-gray-900 bg-opacity-50  shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2">
               <UserDemographicsChart data={data.user_demographics} />
            </div>
            <div className="bg-gray-900 bg-opacity-50  shadow-lg rounded-xl p-6 border border-gray-700">
              <UserActivityHeatmap data={data.user_activity} />
            </div>
            <div className="bg-gray-900 bg-opacity-50  shadow-lg rounded-xl p-6 border border-gray-700">
               <ChannelPerformanceChart data={data.streamify_data} />
            </div>
            <div className="bg-gray-900 bg-opacity-50  shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2">
               <UserSegmentation data={data.user_segmentation} />
            </div>
            <div className="bg-gray-900 bg-opacity-50  shadow-lg rounded-xl p-6 border border-gray-700">
            <UserRetentionChart data={data.user_retention}/>
            </div>
          </>
        ) : (
          <div className="text-center col-span-4">
            <h2>No data available</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
