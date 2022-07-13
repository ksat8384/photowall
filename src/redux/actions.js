import { database } from "../database/config";
import { getDatabase, ref, child, push, update } from "firebase/database";
export function startAddingPost(post) {
  return (dispatch) => {
    return update(ref(database), { [post.id]: post })
      .then(() => {
        // Data saved successfully!
        console.log("updated database with new post");
        dispatch(addPost(post));
      })
      .catch((error) => {
        // The write failed...
        console.log("error", error);
      });
  };
}

//remove
export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index,
  };
}

//adding post
export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId,
  };
}
