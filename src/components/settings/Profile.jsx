import { FaUser } from "react-icons/fa";
import {SettingsSection}from "../../components/index"

const Profile = () => {
	return (
		<SettingsSection icon={FaUser} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>Jessi</h3>
					<p className='dark:text-gray-400 text-gray-700'>jessi@example.com</p>
				</div>
			</div>

			<button className='dark:bg-indigo-600 bg-indigo-500 hover:bg-indigo-400 dark:hover:bg-indigo-700 dark:text-white text-gray-900 font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingsSection>
	);
};
export default Profile;