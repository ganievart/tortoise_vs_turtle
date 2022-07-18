import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   increment,
//   hideMessage,
//   selectCount,
//   selectMessageVisibility
// } from './counterSlice';
import styles from './ImageLoader.module.css';

export function ImageLoader() {
    return (
        <div>
            <div className={styles.row}>
                <span className={styles.text}>Matches with search engine:</span>
                <span className={styles.value}>{count}</span>
            </div>
            <div className={styles.row}>
                <span className={styles.text}>Matches with TensorFlow/Keras: 0</span>
            </div>
        </div>
    );
}
