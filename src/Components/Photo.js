import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photo(props) {
  const { post, index } = props;

  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>

      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => {
            props.removePost(index);
            props.history.push("/");
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Photo;
