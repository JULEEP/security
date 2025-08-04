 

 const ProjectModal = ({projects,onClose})=>{
    return(
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-4xl w-full bg-white shadow-xl rounded-xl font-inter h-[90vh] overflow-y-auto pb-8">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-600 hover:text-black text-2xl z-50 mr-2"
        >
          X
        </button>

        {/* Header */}
        <div className="flex justify-between items-start p-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">
              {projects.title}
            </h1>
            <span className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-full">
              {projects.status}
            </span>
            <p className="text-sm text-gray-800">
              Client: {projects.client?.company}
            </p>
          </div>
        </div>

        <div className="flex justify-between px-10">
          {/* Left Section */}
          <div className="space-y-6 border-r border-gray-200 pr-8 w-[50%] pt-6">
            {/* Client Info */}
            <div className="items-center space-y-3">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/40?img=40"
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="px-4 space-y-1">
                  <p className="text-xl font-bold text-gray-800">
                    {projects.client?.name}
                  </p>
                  <p className="text-lg text-gray-700">
                    {projects.client?.company}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-800">
                  {projects.client?.email}
                </p>
                <p className="text-sm text-gray-800">
                  {projects.client?.phone}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
              <p className="text-sm text-gray-700">{projects.overview}</p>
            </div>

            {/* Scope of Work */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Scope of Work</h2>
              <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                {projects.scopeOfWork?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4 pl-10 w-[50%] pt-6">
            {/* Timeline */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h2>
              <div className="flex justify-between">
                <span className="text-sm text-gray-700">Start Date:</span>
                <p className="text-sm">{projects.timeline?.start?.slice(0, 10)}</p>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-700">End Date:</span>
                <p className="text-sm">{projects.timeline?.end?.slice(0, 10)}</p>
              </div>
            </div>

            {/* Total */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Total</h2>
              <p className="text-2xl font-bold text-gray-900">${projects.total}</p>
            </div>

            {/* Terms */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Terms & Conditions</h2>
              <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                {projects.termsAndConditions?.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default ProjectModal