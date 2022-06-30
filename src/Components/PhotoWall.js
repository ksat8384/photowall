import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";

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

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
