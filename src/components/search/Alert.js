// import TextField from "material-ui/TextField";
// import SelectField from "material-ui/SelectField";
// import MenuItem from "material-ui/MenuItem";
// import Button from "material-ui/core/Button";
import ImageResults from "../image-results/ImageResults";
import axios from "axios";
import Button from '@mui/material/Button';
// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { StarRateSharp } from "@mui/icons-material";
import { CircleLoader } from 'react-spinners';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';


const Alert = () => {
    const isLoading = useSelector(state => state.imageState.isLoading);
    const result = useSelector(state => state.imageState.result);
    return (
        <div>
            {isLoading && (<CircularProgress />)}
            {!isLoading && <div>{result}</div>}
        </div>
    );
};


export default Alert;