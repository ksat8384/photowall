import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
//anchor tag, href attribute
function Photowall(props) {
  const { posts, onRemovePhoto, onNavigate } = props;
  return (
    <div>
      <a className="addIcon" onClick={onNavigate} href="#AddPhoto">
        Add
      </a>

      {/* <button onClick={onNavigate} className="addIcon">
        {" "}
        +{" "}
      </button> */}
      <div className="photoGrid">
        {posts.map((post, index) => (
          <Photo post={post} key={index} onRemovePhoto={onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
