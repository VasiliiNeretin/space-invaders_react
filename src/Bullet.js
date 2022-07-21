import React, { useEffect, useState, useRef } from 'react'
import './App.css';

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}

export function Bullet(props) {
    const bulletRef = useRef(null);

    const calculatePosition = () => {
        const currTop = parseInt(bulletRef.current.style.top);
        bulletRef.current.style.top = `${currTop - 5}px`;
        const invaders = document.querySelectorAll('.Invader');
        invaders.forEach((invader) => {
            const overlap12 = elementsOverlap(bulletRef.current, invader)
            if (overlap12 && invader.style.visibility != 'hidden') {
                invader.style.visibility = 'hidden';
                bulletRef.current.remove();
                console.log(document.getElementById('Invaders').style.gridTemplateColumns)
            }
        })
    };

    const styles = {
        position: 'absolute',
        top: props.defaultPosition.y,
        left: props.defaultPosition.x+45,
        width: 10, height: 10, background: 'transparent'
    }

    useEffect(() => {
        let myInterval = setInterval(() => {
            calculatePosition();
        }, 0.5)

        return () => {
            clearInterval(myInterval);
        }
    }, []);

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
        <img ref={bulletRef} id='Bullet'  src={require('./icons/Ship.png')} alt='Peow' style={styles} />
    )
}
