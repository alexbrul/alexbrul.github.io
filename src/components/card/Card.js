import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
    const {cardDetails} = props
  return <div className={styles.container}>
     <h1 className={styles.title}>{cardDetails.title}</h1>
      <p className={styles.paragraph}>{cardDetails.paragraph}</p>
      <button className={styles.button}>{cardDetails.button}</button>
  </div>;
}
