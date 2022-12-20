import React from 'react';
import styles from './index.module.css'


const Index = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
            <h4> {props.Id} </h4>
            <h3>{props.Tittle}</h3>
            <p>{props.Body}</p>
            </div>
        </div>
    );
};


export default Index;

