const SettingsSection = ({ icon: Icon, title, children }) => {
  return (
    <div className="dark:bg-gray-900 bg-gray-400 bg-opacity-50 shadow-lg rounded-xl p-6 border border-gray-100 dark:border-gray-700 mb-8">
      <div className="flex items-center mb-4">
        <Icon className="dark:text-indigo-400 text-indigo-600 mr-4" size="24" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
      </div>
      {children}
    </div>
  );
};
export default SettingsSection;
