import React from "react";
import { MdMessage } from 'react-icons/md';

export default function ClientDetails() {
  return (
    <div className="max-w-6xl font-inter mx-auto bg-white rounded-xl shadow-md overflow-hidden flex justify-between pb-6">
      <div className="w-full">
        <div className="flex items-center pl-10 py-6">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="avatar"
            className="w-22 h-24 rounded-2xl mr-4"
          />
          <div className="flex-grow">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              Sarah Smith{" "}
              <span className="ml-4 px-6 py-1 text-sm bg-green-400 text-white rounded-full">
                Active
              </span>
            </h1>
            <p className="text-lg text-gray-800 ">sarah@email.com</p>
            <p className="text-lg text-gray-700">
              +1 234 567 8801 • WebWorks Inc.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex space-x-6 border-y border-gray-200 text-gray-600 font-medium text-xl py-3 px-10">
            <button className=" border-black text-black">Overview</button>
            <button>Projects</button>
            <button>Invoices</button>
            <button>Time Logs</button>
            <button>Chats</button>
            <button>Files</button>
          </div>

          <div className="grid grid-cols-[20%_30%_47%] gap-4 mt-6 text-center px-10 ">
            <div className="border p-4 rounded-lg shadow-md shadow-gray-300 space-y-1">
              <p className="text-xl">Total Projects</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="border p-4 rounded-lg shadow-md shadow-gray-300 space-y-1">
              <p className="text-xl">Total Invoiced</p>
              <p className="text-2xl font-bold">$12,750</p>
            </div>
            <div className="border p-4 rounded-lg shadow-md shadow-gray-300 space-y-1">
              <p className="text-xl">Last Activity</p>
              <p className="text-2xl font-bold">2 days ago</p>
            </div>
          </div>

          <div className="mt-6 px-10">
            <h2 className="text-2xl font-semibold mb-3">
              Projects
            </h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-xl text-left">
                <thead className="text-lg border-b ">
                  <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Budget</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Tags</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Website Redesign</td>
                    <td className="px-4 py-3">$5,000</td>
                    <td className="px-4 py-3">
                      <span className="px-4 py-1 bg-gray-200 rounded-full text-lg">
                        Ongoing
                      </span>
                    </td>
                    <td className="px-4 py-3 ">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Design landing page</td>
                    <td className="px-4 py-3">$2,500</td>
                    <td className="px-4 py-3">
                      <span className="px-4 py-1 bg-gray-200 rounded-full text-lg">
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Mobile App UI</td>
                    <td className="px-4 py-3">$5,250</td>
                    <td className="px-4 py-3">
                      <span className="px-4 py-1 bg-gray-200  rounded-full text-lg">
                        Ongoing
                      </span>
                    </td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="">
      <div className="mt-6 flex mr-10 items-center space-x-9 justify-end">
      <MdMessage className="text-gray-800 text-3xl" />

      <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                className="w-10 h-10 rounded-full"
                alt=""
        />
        
      </div>  
      <div className="px-6 py-6 border border-gray-100 rounded-lg h-auto mt-10 mr-6 shadow-sm">
        <div className="h-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Notes</h2>
          <textarea
            className="w-full border rounded-lg text-lg text-left h-10 pl-2 pt-1 "
            placeholder="Add note..."
          ></textarea>
        </div>
        <div className="h-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-5">
            Activity
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <div className="flex items-start">
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                className="w-8 h-8 rounded-full mr-2 mt-1"
                alt=""
              />
              <p>
                You created an Invoice #004 <br />
                <span className="text-sm text-gray-500">2 days ago</span>
              </p>
            </div>
            <div className="flex items-start">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-8 h-8 rounded-full mr-2 mt-1"
                alt=""
              />
              <p>
                Invoice #001 marked as paid <br />
                <span className="text-sm text-gray-500">1 week ago</span>
              </p>
            </div>
            <div className="flex items-start ">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-8 h-8 rounded-full mr-2 mt-1"
                alt=""
              />
              <p className="leading-1">
                You created an Invoice #003 <br />
                <span className="text-sm text-gray-500 ">2 weeks ago</span>
              </p>
            </div>
            <div className="flex items-start">
            <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-8 h-8 rounded-full mr-2 mt-1"
                alt=""
              />
              <p>
                You added Design landing page <br />
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
