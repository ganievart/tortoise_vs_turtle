import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import Button from '@mui/material/Button';

class ImageResults extends React.Component {
  render() {
    console.log(this.props.images[0]);
    return (
      <div>
        { this.props.images.length > 0 ? (
          <img src={this.props.images[0].webformatURL} />
        ): null}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    images: state.imageState.images
  };
};

export default connect(mapStateToProps)(ImageResults)


