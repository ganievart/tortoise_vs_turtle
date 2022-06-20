import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  hideMessage,
  selectCount,
  selectMessageVisibility
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const isMessageVisible = useSelector(selectMessageVisibility);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const incrementValue = Number(incrementAmount);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.text}>Matches with search engine:</span>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.text}>Matches with TensorFlow/Keras: 0</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(increment(incrementValue))}
        >
          Tortoise
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(increment(incrementValue))}
        >
          Turtle
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(increment(incrementValue))}
        >
          WTF!
        </button>
      </div>
      <div
        onAnimationEnd={() => dispatch(hideMessage())}
        className={isMessageVisible ? styles.fadeInAndOut : styles.hidden}
        >
        Data has been saved!</div>
    </div>
  );
}
