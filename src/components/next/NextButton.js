
import axios from "axios";
import Button from '@mui/material/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages, sendImage } from '../../actions/index.js';

class NextButton extends React.Component {
    render() {
        // console.log(this.state.images);
        return (
            <div>
                <Button variant="outlined" onClick={this.props.clickButton}>Next image</Button>
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
            dispatch(sendImage());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);