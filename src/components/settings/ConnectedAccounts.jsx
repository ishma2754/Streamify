import { useState } from "react";
import { MdHelpOutline, MdAdd } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import SettingsSection from "./SettingsSection";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: <FaGoogle className="text-xl" />,
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: <FaFacebook className="text-xl" />,
    },
    {
      id: 3,
      name: "Instagram",
      connected: true,
      icon: <FaInstagram className="text-xl" />,
    },
  ]);
  return (
    <SettingsSection icon={MdHelpOutline} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3"
        >
          <div className="flex gap-1 items-center justify-center">
            {account.icon}
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected,
                    };
                  }
                  return acc;
                })
              );
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <MdAdd size={18} className="mr-2" /> Add Account
      </button>
    </SettingsSection>
  );
};

export default ConnectedAccounts;
