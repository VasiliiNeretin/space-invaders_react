import React, { useEffect, useState } from 'react'
import './App.css';
import checkOverlap from 'check-element-overlap';


export function Bullet(props) {

    // let listenForOverlap = require('element-overlap').listenForOverlap;

    let interactionCounter = 0;
    const [bottomSpace, setBottomSpace] = useState(0);
    const calculatePosition = () => {
        let elem = document.querySelector('div');
        setBottomSpace((bottomSpace) => bottomSpace + 1);

        document.getElementById('Bullet').style.bottom = `${bottomSpace}px`;

        const invaderRef = document.querySelector('.Invader');
        const bulletRef = document.querySelector('.Bullet');
        const overlap12 = checkOverlap(bulletRef, invaderRef);
        if (overlap12) {
            if (interactionCounter===0) {
                console.log(overlap12);
                invaderRef.remove();
                // bulletRef.remove();
                interactionCounter = 1;
            }
        }
    };

    const styles = {
        position: 'absolute', bottom: 0, width: 10, height: 10, background: 'blue'
    }

    useEffect(() => {
        let myInterval = setInterval(() => {
            calculatePosition();

        }, 10)

        return () => {
            clearInterval(myInterval);

        }
    });

    // const onIntersection = (entries) => {
    //     for (const entry of entries) {
    //         if (entry.isIntersecting) {
    //             console.log(entry);
    //         }
    //     }
    // };

    // const observer = new IntersectionObserver(onIntersection);
    // observer.observe(document.querySelector('img'));
    return (
        <img id='Bullet' className='Bullet' src={require('./icons/Ship.png')} alt='Peow' style={styles} />
    )
}
