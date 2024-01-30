import React from 'react'
import BackGround from "../assets/profile-background.png"
import Avatar from "../assets/avatar.png"
import './Top.scss'

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          <img className="bg-img" src={BackGround} alt="noimage" />
          <img className="avatar"src={Avatar} alt="noimage" />
        </div>
      </div>
    </div>
  );
}

export default Top;