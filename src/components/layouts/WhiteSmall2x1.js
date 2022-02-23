import React from 'react';
import styles from './WhiteSmall2x1.module.css'

export default function WhiteSmall2x1(props) {
  
  const {children} = props
  return <div className={styles.container}>
    <div></div>
    {children}
    <div></div>
  </div>;
}
