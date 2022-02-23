import React, { useState } from 'react';
import styles from './Header.module.css';
import Nav from './Nav'
import NewLogo from '../../resources/bdotno.gif'

export default function Header() {

  const [activeNav, setActiveNav] = useState(false);
  function switchActive() {
    setActiveNav(!activeNav);
    console.log("ActiveNav: ", activeNav)
  }

  return <>
    <header className={styles.headerr}>
        <div className={styles.container}>
          {/* <div className={styles.logo}>WebIOT</div> */}
          <img src={NewLogo}/>
          <button onClick={() => switchActive()}>{!activeNav ? <box-icon name='menu'></box-icon> : <box-icon name='x'></box-icon> } </button>
          <div></div> 
          <div>Contact us</div>
      </div>
    </header>
    <Nav isVisable={activeNav} />


  </>

}
