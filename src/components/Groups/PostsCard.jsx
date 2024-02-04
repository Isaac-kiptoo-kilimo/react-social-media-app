import React from 'react'
import NavIcon from '../NavIcon';
import SearchIcon from '../../assets/search-circle.png'
import Button from '../shared/Button'

import './PostsCard.scss'




const PostsCard = () => {
  return (
 
      <div className='group-page-header'>
      <div className="group-page-title">
        <h2>Groups</h2>
      </div>
      <div className="group-page-icon">
        <NavIcon url={SearchIcon}/>
        <Button msg="Join Group" />
      </div>
    </div>

  )
}

export default PostsCard;
