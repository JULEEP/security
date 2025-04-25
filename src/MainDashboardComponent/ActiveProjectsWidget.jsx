import React from "react";
import { FiFolder } from 'react-icons/fi';
const ActiveProjectsWidget = ()=>{
    return(
       <div className="bg-white flex rounded-lg shadow-md justify-between p-4 items-center max-h-max">
        <div className="flex gap-3 items-center" >
        <FiFolder className="bg-blue-100 size-8 p-2 rounded-lg text-blue-700"/>
          <p className="w-8 text-xl font-semibold leading-tight">Active Projects</p>
        </div>
        
        <div className="text-xl">3</div>
        
       </div>
    )
}
export default ActiveProjectsWidget;