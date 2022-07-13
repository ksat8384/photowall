import { database } from "../database/config";
import {
  getDatabase,
  ref,
  child,
  push,
  update,
  onValue,
  remove,
  set,
} from "firebase/database";

export function startAddingComment(comment, postId) {
  return (dispatch) => {
    const commentListRef = ref(database, `comments/${postId}`);
    push(commentListRef, comment)
      .then(() => {
        // Data saved successfully!
        console.log("updated database with the comment");
        dispatch(addComment(comment, postId));
      })
      .catch((error) => {
        // The write failed...
        console.log("error", error);
      });
  };
}

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

export function startLoadingComments() {
  return (dispatch) => {
    return onValue(
      ref(database, "comments"),
      (snapshot) => {
        let comments = {};
        snapshot.forEach((childSnapshot) => {
          console.log("childSnapshot.key>>", childSnapshot.key);
          console.log("childSnapshot.val()>>", childSnapshot.val());
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadComments(comments));
      },
      {
        onlyOnce: true,
      }
    );
  };
}

export function startRemovingPost(index, id) {
  return (dispatch) => {
    //To delete both post and the comment node associated with it
    const updates = {
      [`posts/${id}`]: null,
      [`comments/${id}`]: null,
    };
    return update(ref(database), updates)
      .then(() => {
        dispatch(removePost(index));
      })
      .catch((error) => {
        // The delete failed...
        console.log("error", error);
      });

    // return remove(ref(database, `posts/${id}`)).then(() => {
    //   dispatch(removePost(index));
    // });
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

export function loadComments(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments,
  };
}
