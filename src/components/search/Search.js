// import TextField from "material-ui/TextField";
// import SelectField from "material-ui/SelectField";
// import MenuItem from "material-ui/MenuItem";
// import Button from "material-ui/core/Button";
import ImageResults from "../image-results/ImageResults";
import axios from "axios";
import Button from '@mui/material/Button';
// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchImages, nextImage, prevImage } from '../../actions/index.js';
import { useDispatch } from "react-redux";

class Search extends React.Component {

  state = {
    amount: 1,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11047628-635bca23b99c10143c7630956",
    images: []
  };

  clickButton() {
    console.log("clickButton")
    axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=turtle|tortoise&image_type=photo&safesearch=true`).then((res) => {
      console.log(res.data.hits);
      fetchImages(res.data.hits);
      // this.props.images = res.data.hits;
    });
  }

  render() {
    // console.log(this.state.images);
    return (
      <div>
        <Button variant="contained" onClick={this.props.clickButton}>Load images</Button>
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