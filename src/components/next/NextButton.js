
import axios from "axios";
import Button from '@mui/material/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../actions/index.js';

class NextButton extends React.Component {
    render() {
        // console.log(this.state.images);
        return (
            <div>
                <Button variant="contained" onClick={this.props.clickButton}>Next image</Button>
            </div>
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
            dispatch(getImages());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);