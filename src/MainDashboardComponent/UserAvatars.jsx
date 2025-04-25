
const UserAvatars = ()=>{
    return(
        <div className="bg-white rounded-lg shadow-md px-4 py-3">
           <div className="flex items-center space-x-2 mt-4">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Robert"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">Robert</p>
          <p className="text-xs text-gray-500">1 hr</p>
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-2">
        <img
          src="https://randomuser.me/api/portraits/women/2.jpg"
          alt="Amanda"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">Amanda</p>
          <p className="text-xs text-gray-500">4 hr</p>
        </div>
      </div>
       </div>
    )
}
export default UserAvatars;