import { database } from "../database/config";
import {
  getDatabase,
  ref,
  child,
  push,
  update,
  onValue,
  remove,
} from "firebase/database";
export function startAddingPost(post) {
  return (dispatch) => {
    return update(ref(database, "posts"), { [post.id]: post })
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

export function startLoadingPost() {
  return (dispatch) => {
    return onValue(
      ref(database, "posts"),
      (snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          console.log("childSnapshot.val()>>", childSnapshot.val());
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      },
      {
        onlyOnce: true,
      }
    );
  };
}

export function startRemovingPost(index, id) {
  return (dispatch) => {
    return remove(ref(database, `posts/${id}`)).then(() => {
      dispatch(removePost(index));
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

export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts,
  };
}
