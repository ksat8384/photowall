import React, { Component } from "react";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      console.log("loading post completed.");
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />

        <Route
          path="/addPhoto"
          render={({ history }) => <AddPhoto {...this.props} />}
        />

        <Route
          path="/single/:id"
          render={(params) => (
            <Single {...this.props} {...params} loading={this.state.loading} />
          )}
        />
      </div>
    );
  }
}

export default Main;
