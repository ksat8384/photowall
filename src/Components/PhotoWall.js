import React from "react";
import Photo from "./Photo";

function Photowall(props) {
  const { posts, onRemovePhoto } = props;
  return (
    <div className="photoGrid">
      {posts.map((post, index) => (
          <Photo post={post} key={index} onRemovePhoto={onRemovePhoto} />
      ))}
    </div>
  );
}

export default Photowall;
