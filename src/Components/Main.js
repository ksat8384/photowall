import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import { removePost } from "../redux/actions";

class Main extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // this.props.dispatch(removePost(1))
    // this.props.removePost(1)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <Photowall {...this.props} />
            </div>
          )}
        />

        {/* <Route
          path="/addPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost);
                history.push("/");
              }}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default Main;
