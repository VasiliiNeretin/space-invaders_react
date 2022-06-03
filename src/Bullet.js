import React, { useEffect, useState } from 'react'
import './App.css';



export function Bullet(props) {
    console.log(`Bullet's here!`);
    const [position, setPosition] = useState(500);
    const calculatePosition = () => {
        let elem = document.querySelector('div');
        let rect = elem.getBoundingClientRect();

        console.log(document.getElementById('Bullet').top);
        setPosition((position) => position - 1)
        const difference = 1;
        let P = {};
    };

    const styles = {
        position: 'absolute'
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setPosition(calculatePosition());
        }, 1000);
        return () => clearTimeout(timer);
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
        <div id='Bullet' style={styles}>
            <img src={require('./icons/Bullet.png')} alt='Peow' />
        </div>
    )
}
