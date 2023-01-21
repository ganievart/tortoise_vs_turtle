import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';


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