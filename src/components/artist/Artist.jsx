import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Artist = ({ singleArtist }) => {
  if (!singleArtist) return null;

  const socialMediaIcons = {
    Instagram: <FaInstagram className="text-pink-500 dark:text-[#ff4081]" />,
    Twitter: <FaTwitter className="text-blue-500 dark:text-[#1da1f2]" />,
    Facebook: <FaFacebook className="text-blue-500 dark:text-[#3b5998]" />,
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 pl-4">
      <div className="flex-1">
        <div className="info">
          <div className="topInfo flex items-center gap-5">
            {singleArtist.img && (
              <img
                src={singleArtist.img}
                alt=""
                className="w-24 h-24 rounded-2xl object-cover"
              />
            )}
            <h1 className="font-medium text-2xl dark:text-[#f45b69] lg:text-xl text-[#333333]">
              {singleArtist.title}
            </h1>
          </div>
          <div className="details text-lg mt-4">
            {Object.entries(singleArtist.info).map((item) => (
              <div className="item my-4" key={item[0]}>
                <span className="itemTitle font-semibold mr-2 capitalize dark:text-[#f45b69] text-[#333333]">
                  {item[0]}
                </span>
                <span className="itemValue text-sm">{item[1]}</span>
              </div>
            ))}
          </div>

          <div className="latest mt-8">
            <h2 className="text-lg font-semibold dark:text-[#f45b69] text-[#333333]">
              Latest Album
            </h2>
            <p className="text-sm">
              {singleArtist.latest_album.title} (Released:{" "}
              {singleArtist.latest_album.release_date})
            </p>
            <h2 className="text-lg font-semibold mt-4 dark:text-[#f45b69] text-[#333333]">
              Latest Song
            </h2>
            <p className="text-sm">
              {singleArtist.latest_song.title} (Released:{" "}
              {singleArtist.latest_song.release_date})
            </p>
          </div>

          <div className="social-media mt-8">
            <h2 className="text-lg font-semibold dark:text-[#f45b69] text-[#333333]">
              Social Media Followers
            </h2>
            <ul className="list-none">
              {Object.entries(singleArtist.social_media.followers).map(
                ([platform, count]) => (
                  <li key={platform} className="flex items-center mb-2">
                    <span className="mr-2">{socialMediaIcons[platform]}</span>
                    <span className="font-semibold mr-2">{platform}:</span>{" "}
                    <span className="text-sm">{count}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-400 w-9/12 my-5" />

        {singleArtist.chart && (
          <div className="chart mt-12 w-full md:w-4/5 h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={singleArtist.chart.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  wrapperStyle={{
                    width: "223px",
                    height: "40px",
                    fontSize: "15px",
                  }}
                />
                <Legend />
                {singleArtist.chart.dataKeys.map((dataKey) => (
                  <Line
                    key={dataKey.name}
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="flex-1">
        <h2 className="mb-5 text-xl font-semibold dark:text-white text-black">
          Latest Activities
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 dark:bg-[#f45b69] bg-[#716e6e] z-10"></div>
          <ul className="flex flex-col pl-5">
            {singleArtist.activities &&
              singleArtist.activities.map((activity) => (
                <li key={activity.text} className="flex mb-4 relative">
                  <div className="absolute left-0 top-20 transform translate-y-1 w-2.5 h-2.5 dark:bg-[#f45b69] bg-[#656464] rounded-full" />
                  <div className="flex-1">
                    <div className="p-4 rounded-md dark:bg-[#f45b6810] bg-white">
                      <p className="mb-1 dark:text-white text-black text-sm">
                        {activity.text}
                      </p>
                      <time className="text-xs dark:text-gray-400 text-gray-500">
                        {activity.time}
                      </time>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Artist;
