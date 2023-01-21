import Button from '@mui/material/Button';
import React from 'react';
import { fetchImages } from '../../actions/index.js';
import { useDispatch, connect, } from 'react-redux';

const Search = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <Button variant="contained" onClick={() => dispatch(fetchImages())}>Refresh images</Button>
    </div >
  );
}

export default connect()(Search);