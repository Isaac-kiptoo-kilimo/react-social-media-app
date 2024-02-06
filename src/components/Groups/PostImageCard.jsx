import React from "react";


import "./PostImageCard.scss";

const PostImageCard = ({PostImage}) => {
  return (
    <div className="group-post-card">

      <div className="post-card-image">
        <img src={PostImage} alt="post Image" />
      </div>
      
    </div>
  );
};

export default PostImageCard;
