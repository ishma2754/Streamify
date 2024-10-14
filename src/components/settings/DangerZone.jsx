import { MdDelete } from "react-icons/md";
const DangerZone = () => {
  return (
    <div className="dark:bg-red-900 bg-red-600 bg-opacity-50 backdrop-filter shadow-lg rounded-xl p-6 border border-red-300 dark:border-red-700 mb-8">
      <div className="flex items-center mb-4">
        <MdDelete className="dark:text-red-400 text-red-700 mr-3" size={24} />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Danger Zone</h2>
      </div>
      <p className="dark:text-gray-300  text-gray-200 mb-4">
        Permanently delete your account and all of your content.
      </p>
      <button
        className="dark:bg-red-600 bg-red-500 hover:bg-red-300 dark:hover:bg-red-700 text-gray-900 dark:text-white font-bold py-2 px-4 rounded 
      transition duration-200"
      >
        Delete Account
      </button>
    </div>
  );
};
export default DangerZone;
