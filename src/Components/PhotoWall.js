import React from "react";
import Photo from "./Photo";

function Photowall(props) {
  const { posts } = props;
  return (
    <div className="photoGrid">
      {posts.map((post, index) => (
        <Photo post={post} key={index} />
      ))}
    </div>
  );
}

export default Photowall;
