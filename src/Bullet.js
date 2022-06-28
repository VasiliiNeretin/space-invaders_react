import React, { useEffect, useState } from 'react'
import './App.css';
// import listenForOverlap from 'element-overlap';


export function Bullet(props) {
    
    // let listenForOverlap = require('element-overlap').listenForOverlap;
    // listenForOverlap(
    //     `${document.getElementById('Bullet')}`,'#Invader',
    //     function() {
    //         alert('The elements have overlapped!');
    //     }
    // );

    console.log(`Bullet's here!`);
    const [bottomSpace, setBottomSpace] = useState(0);
    const calculatePosition = () => {
        let elem = document.querySelector('div');
        setBottomSpace((bottomSpace) => bottomSpace + 10);
        document.getElementById('Bullet').style.bottom = `${bottomSpace}px`;
        console.log(document.getElementById('Bullet').style.bottom);

    };

    const styles = {
        position: 'absolute', bottom: 0, left:'50%', width:10, height:10, zindex:5
    }

    useEffect(() => {
        console.log(`Hey! There's the ${bottomSpace}`);
        let myInterval = setInterval(() => {
            
            calculatePosition();
        
        }, 10)
        console.log('Effect smashed');

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
            <img id='Bullet' src={require('./icons/Ship.png')} alt='Peow' style={styles} />
    )
}
