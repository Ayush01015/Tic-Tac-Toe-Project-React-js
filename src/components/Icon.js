import React from 'react'
import {FaTimes,FaPen,FaRegCircle} from 'react-icons/fa'
const Icon = (props) => {
    switch (props.name) {
        case "circle":
            return <FaRegCircle style={{color:"#3EC70B"}} className='icon' />
        case "cross":
            return <FaTimes style={{color:"#FF1E00"}} className='icon'/>
        default:
            return <FaPen style={{color:"#1B2430"}} className='icon'/>
    }
}

export default Icon
