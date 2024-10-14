import { FaLock } from "react-icons/fa";
import { SettingsSection, ToggleSwitch } from "../../components/index";
import { useState } from "react";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <SettingsSection icon={FaLock} title={"Security"}>
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className="mt-4">
        <button
          className="dark:bg-indigo-600  bg-indigo-500 dark:hover:bg-indigo-700 hover:bg-indigo-400 dark:text-white text-gray-900 font-bold py-2 px-4 rounded 
        transition duration-200
        "
        >
          Change Password
        </button>
      </div>
    </SettingsSection>
  );
};
export default Security;
