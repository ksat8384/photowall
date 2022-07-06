import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//anchor tag, href attribute
function Photowall(props) {
  const { posts, onRemovePhoto, onNavigate } = props;
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        Add
      </Link>
      <div className="photoGrid">
        {posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
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
