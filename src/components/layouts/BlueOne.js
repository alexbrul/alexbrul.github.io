import React from 'react';
import styles from './BlueOne.module.css'

export default function BlueOne(props) {
  
  const {children} = props
  return <div className={styles.container}>
      <div></div>
    <div>{children}</div>
  </div>;
}