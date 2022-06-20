import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  selectCount
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
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
      </div>
    </div>
  );
}
