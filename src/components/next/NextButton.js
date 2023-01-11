
import axios from "axios";
import Button from '@mui/material/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages, sendImage } from '../../actions/index.js';

const NextButton = (props) => {
    return (
        <div>
            <Button variant="outlined" onClick={() => props.clickButton(props.currentImageUrl)}>{props.text}</Button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currentImageUrl: state.currentImageUrl
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clickButton: (url) => {
            console.log(`click ${url}`)
            dispatch(sendImage(url));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);