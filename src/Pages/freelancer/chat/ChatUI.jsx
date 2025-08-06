import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FiSearch } from "react-icons/fi";
const users = [
  { name: "Amanda Clark", desc: "Mobile App", time: "11:15 AM" },
  { name: "John Smith", desc: "E-commerce Site", time: "9:12 AM" },
  { name: "Lisa Wong", desc: "Website Redesign", time: "Yesterday" },
  { name: "Mark Johnson", desc: "Got it 👍", time: "Monday" },
  { name: "Sarah Smith", desc: "Analytics Dashboard", time: "Sunday" },
  { name: "Brandon Lee", desc: "Brand Identity", time: "Jun 3" },
];

export default function ChatUI() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="w-72 border-r p-4 space-y-4 bg-white">
        <div className="flex items-center gap-2 px-3 py-2 rounded bg-gray-100">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-3">
          {users.map((user, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedUser(user)}
              className={`flex justify-between items-start p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                selectedUser.name === user.name ? "bg-gray-100" : ""
              }`}
            >
              <div>
                <p className="font-medium text-lg">{user.name}</p>
                <p className="text-lg text-gray-500">{user.desc}</p>
              </div>
              <p className="text-sm text-gray-400 whitespace-nowrap">
                {user.time}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="Amanda Clark"
              className="w-9 h-9 rounded-full"
            />
            <span className="font-medium text-2xl">Amanda Clark</span>
          </div>
          <div className="space-x-5 text-xl text-gray-500">
            <FontAwesomeIcon icon={faPhone} className="cursor-pointer" />
            <FontAwesomeIcon icon={faVideo} className="cursor-pointer" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto text-lg">
          {/* Message 1 */}
          <div className="text-right">
            <p className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
              Hi, could you send me the latest design files?
            </p>
            <p className="text-xs text-gray-400 mt-1">10:48 AM</p>
          </div>

          {/* Message 2 */}
          <div className="text-left space-y-1">
            <div className="bg-gray-100 px-4 py-3 rounded-lg inline-block">
              <p className="font-medium flex items-center gap-2">
                📎 Design Assets.zip
              </p>
              <p className="text-xs text-gray-500">4.2 MB</p>
            </div>
            <p>Just sent them over 😉</p>
          </div>

          {/* Message 3 */}
          <div className="text-right">
            <p className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
              Got it! Thanks!
            </p>
            <p className="text-xs text-gray-400 mt-1">11:15 AM</p>
          </div>

          {/* Message 4 */}
          <div className="text-left">
            <p className="inline-block bg-gray-100 px-4 py-2 rounded-lg">
              Sure, I'll get that updated for you
            </p>
          </div>

          {/* Message 5 */}
          <div className="text-right">
            <p className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
              Sure, I’ll get it for me
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="border-t p-4 flex items-center space-x-3 text-lg">
          <input
            type="text"
            placeholder="Type an message"
            className="flex-1 px-4 py-2 rounded-full border bg-gray-100 outline-none"
          />
          <button className="text-white bg-blue-500 px-4 py-2 rounded-full text-sm">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
