import React from "react";

const ProposalDetails = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 font-inter pb-6">
      {/* Header */}
      <div className="flex justify-between items-start p-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Website Redesign Proposal
          </h1>
          <button className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-full">
            Pending
          </button>
          <p className="text-sm text-gray-800">
            Client: Alpha Corp • April 10, 2025
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 border-y border-gray-200 py-3 px-6 font-semibold">
        <button className="px-4 py-2 text-lg  text-gray-800 ">
          Client Information
        </button>
        <button className="px-4 py-2 text-lg  text-gray-800 ">Edit</button>
        <button className="px-4 py-2  text-lg  text-gray-800 ">
          Download PDF
        </button>
        <button className="px-4 py-2 text-gray-800 rounded-md text-lg">
          Send to Client
        </button>
      </div>

      <div className="flex justify-between px-10">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-6 border-r border-gray-200 pr-8 w-[50%] pt-6">
          <div className="items-center space-y-3">
            <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/40?img=40"
              alt="Sarah Johnson"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="px-4">
              <p className="text-xl font-bold text-gray-800">
                Sarah Johnson
              </p>
              <p className="text-lg text-gray-700">Alpha Corp</p>
            </div>
            </div>
            <div>
              <p className="text-sm text-gray-800">sjohnson@example.com</p>
              <p className="text-sm text-gray-800">(123) 456-7890</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Overview
            </h2>
            <p className="text-sm text-gray-700">
              Hi Sarah, I’ve put together a proposal for the redesign of your
              company’s website for your consideration.
            </p>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Scope of Work
            </h2>
            <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
              <li>Develop a new homepage design and layout</li>
              <li>Refresh branding elements and color scheme</li>
              <li>Improve site navigation and user experience</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-1 space-y-4 pl-10 w-[50%] pt-6">
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Scope of Work
            </h2>
            <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
              <li>Develop a new homepage design and layout</li>
              <li>Refresh branding elements and color scheme</li>
              <li>Improve site navigation and user experience</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Timeline
            </h2>
            <div className="flex justify-between">
            <p className="text-sm text-gray-700">
              Start Date: 
            </p>
            <p className="text-sm">$750.00</p>
            </div>
           
            <div className="flex justify-between">
            <p className="text-sm text-gray-700">
              End Date:  </p>
              <p className="text-sm">Jun 30, 2025</p>
            
            </div>
            
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Total</h2>
            <p className="text-2xl font-bold text-gray-900">$3,750.00</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Terms & Conditions
            </h2>
            <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
              <li>A 50% deposit is required to begin work</li>
              <li>The remaining balance is due upon project completion</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          Accept
        </button>
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100">
          Request Changes
        </button>
      </div>
    </div>
  );
};

export default ProposalDetails;
