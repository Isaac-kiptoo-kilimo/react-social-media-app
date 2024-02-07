import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import './Dropdown.scss'

const Dropdown = () => {
  return (
    <div className="drop-profile">
        
        <div className="logout-profile">
       <button>
        <BiLogOutCircle/>
        <h4>Logout</h4>
       </button>
        </div>
    </div>
  )
}

export default Dropdown;
