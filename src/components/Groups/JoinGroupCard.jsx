import React from "react";

import "./JoinGroupCard.scss";
import GroupHeader from "./GroupHeader";
import PostsCard from "./PostsCard";

const JoinGroupCard = () => {
  return (
    <div className="group-container">
      <GroupHeader />
      <PostsCard/>
    </div>
  );
};

export default JoinGroupCard;
