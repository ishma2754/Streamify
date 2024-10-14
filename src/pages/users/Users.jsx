import { useSelector } from "react-redux";
import {
  UserActivityHeatmap,
  UserDemographicsChart,
  ChannelPerformanceChart,
  UserSegmentation,
  UserRetentionChart,
} from "../../components/index";
const Users = () => {
  const { data } = useSelector((state) => state.streamify);
  const hasData = data && Object.keys(data).length > 0;
  

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {hasData ? (
          <>
            <div className="lg:col-span-2 bg-white bg-opacity-50 shadow-lg rounded-lg p-5 border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
              <UserDemographicsChart data={data.user_demographics} />
            </div>
            <div className="p-5 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
              <UserActivityHeatmap data={data.user_activity} />
            </div>
            <div className="dark:bg-gray-900  bg-white bg-opacity-50 border border-gray-300  shadow-lg rounded-xl p-5  dark:bg-opacity-50 dark:border-gray-700">
              <ChannelPerformanceChart data={data.streamify_data} />
            </div>
            <div className="lg:col-span-2 p-5 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
              <UserSegmentation data={data.user_segmentation} />
            </div>
            <div className=" p-5  bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-300 dark:bg-gray-900 dark:bg-opacity-50 dark:border-gray-700">
              <UserRetentionChart data={data.user_retention} />
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
