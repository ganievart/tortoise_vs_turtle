
import axios from "axios";
import Button from '@mui/material/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages, sendImage } from '../../actions/index.js';
import { useSelector, useDispatch } from 'react-redux';

const SendResponseButton = (props) => {
    const data = useSelector(state => state.imageState.currentImageUrl);
    return (
        <div>
            <Button variant="outlined" onClick={() => props.clickButton(data)}>{props.text}</Button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        clickButton: (data) => {
            console.log(`click ${data}`)
        }
    };
};

export default connect(mapDispatchToProps)(SendResponseButton);