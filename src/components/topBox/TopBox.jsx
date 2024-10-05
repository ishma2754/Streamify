import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1 className="mb-5">Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div
            className="flex items-center justify-between mb-7 listItem"
            key={user.id}
          >
            <div className="flex gap-5 user">
              <img
                src={user.img}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1 userTexts">
                <span className="font-medium text-sm username">
                  {user.username}
                </span>
                <span className="text-xs email">{user.email}</span>
              </div>
            </div>
            <span className="font-medium amount ml-4">${user.amount}</span>{" "}
            {/* Added margin-left here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
