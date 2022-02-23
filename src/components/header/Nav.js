import React, { useEffect, useState } from 'react';
import styles from './Nav.module.css'
import ListOptions from '../../resources/ListOptions'
import { motion } from "framer-motion"

export default function Nav(props) {
    const { isVisable } = props
    const [displayed, setDisplayed] = useState();

    useEffect(() => {
        // Update the document title using the browser API
        var btnContainer = document.getElementById("myDIV");
        if (isVisable) {
            btnContainer.className += " active";
        } else {
            btnContainer.className.replace(" active", "");
        }



    }, [isVisable]);

    return <><motion.div
    initial={{y: '-60vh'}}
        animate={{
            y: !isVisable ? '-60vh' : '7vh',
            opacity: isVisable ? 1 : 0,
            position: 'fixed',
            width: '100%',
        }}
        transition={{
            duration: 0.5
        }}>
        <div id="myDIV" className={styles.wrapper}>
            <div className={styles.container}>
                <div></div>
                <div><h1>Velkommen!</h1>
                    <ul>
                        {
                            ListOptions.map((category) => <li className={category.sections !== displayed ? styles.liNormal : styles.liClicked} onClick={() => { setDisplayed(category.sections) }}>{category.option}</li>)
                        }
                    </ul>
                </div>
                <div className={styles.par}>
                    <div></div>
                    {displayed && displayed.map((x) => {
                        return (
                            <div className={styles.cards}>
                                <h2>{x.title}</h2>
                                <div>{x.text.map(i => (<div> <p>{i}</p> </div> ))}</div>
                            </div>)
                    })}
                </div>

            </div>
        </div>
    </motion.div></>
}
