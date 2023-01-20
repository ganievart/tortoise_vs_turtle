import Button from '@mui/material/Button';
import React from 'react';
import { connect } from 'react-redux';
import { fetchImages, nextImage, prevImage } from '../../actions/index.js';

class Search extends React.Component {

  state = {
    amount: 1,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11047628-635bca23b99c10143c7630956",
    images: []
  };

  render() {
    // console.log(this.state.images);
    return (
      <div>
        <Button variant="contained" onClick={this.props.clickButton}>Refresh images</Button>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickButton: () => {
      dispatch(fetchImages());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);