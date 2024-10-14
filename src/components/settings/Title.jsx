const Title = ({ title }) => {
  return (
    <header className="dark:bg-gray-900 bg-gray-400 bg-opacity-50  shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold font-poppins text-gray-900 dark:text-gray-100">{title}</h1>
      </div>
    </header>
  );
};
export default Title;
