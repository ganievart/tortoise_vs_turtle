
import axios from "axios";
import Button from '@mui/material/Button';
import React, { Component } from 'react';

class NextButton extends React.Component {
    render() {
        // console.log(this.state.images);
        return (
            <div>
                <Button variant="contained">Next image</Button>
            </div >
        );
    }
}

export default NextButton;