import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverview from "../../collectionsOverview/collectionsOverview";

import WithSpinner from "../../with-spinner/with-spinner-component";
import CollectionPage from "../collection/collection";
import { createStructuredSelector } from "reselect";
import { selectCollectionsIsFetching } from "../../reducer/shopReducer/shopSelector";
import { fetchCollectionAsync } from "../../reducer/shopReducer/shopAction";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionAsync } = this.props;

    fetchCollectionAsync();
  }

  render() {
    const { match, isCollectFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectFetching}
              {...props}
            />
          )}
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectFetching: selectCollectionsIsFetching,
});

const mapStateToDispatch = (dispatch) => {
  return {
    fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(ShopPage);
