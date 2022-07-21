import './App.css';
import Draggable from 'react-draggable';
import React, { useState, useEffect } from 'react'
import { Bullet } from './Bullet.js'


export function Ship() {
    const [bullets, setBullets] = useState([]);
    const [myInterval, setMyInterval] = useState();

    

    const handleStart = () => {
        setMyInterval(setInterval(() => {
            let shipPosition = document.getElementById('Ship').getBoundingClientRect();
            setBullets(bullets => [...bullets, <Bullet defaultPosition={shipPosition} />]);
            console.log(shipPosition.x);
        }, 1000))

    }

    const handleEnd = () => {
        console.log('interval Cleared')
        clearInterval(myInterval);

    }

    return (
        <div>
            <div>
                {bullets}
            </div>
            

            <Draggable axis="x" handle=".handle"
                grid={[1, 1]}
                onStart={handleStart}
                // // onDrag={handleStart}
                // onStop={handleEnd}
                // bounds={'left:200'}
                onStop={handleEnd}
                scale={1}
                left={'50%'}>
                <div id={'Ship'} style={{ position: "absolute", left:'50%', bottom: "10%" }}>
                    <div className="handle" style={{ userSelect: 'none' }}>
                        <img src={require('./icons/Ship.png')} alt='Weee' style={{ pointerEvents: 'none', userSelect: 'none', width: 100, height: 100, left: '50%' }} />
                    </div>
                </div>
            </Draggable>
            
        </div>
    )
}