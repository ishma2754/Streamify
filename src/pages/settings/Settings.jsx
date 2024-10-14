import {Profile, Notifications, Security, ConnectedAccounts, DangerZone, Title} from "../../components/index"
const Settings = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-100 dark:bg-gray-800">
      <Title title='Settings' />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default Settings;
