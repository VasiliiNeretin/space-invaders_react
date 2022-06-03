import './App.css';
import Draggable from 'react-draggable';
import React from 'react'
import { Bullet } from './Bullet'


export function Ship() {
    let newBullet;
    newBullet = React.createElement(Bullet);
    let listBullets;
    const handleStart = () => {
        const numbers = [1, 2, 3, 4, 5]
        listBullets = numbers.map((number) => <Bullet/>);
        // newBullet = React.createElement(Bullet, [],);
        console.log('click happened');
    }

    return (
        <div style={{ position: 'absolute', bottom: '5%', left: '50%' }}>
            <Draggable axis="x" handle=".handle"
                grid={[25, 25]}
                onStart={handleStart}
                onDrag={handleStart}
                scale={1}>
                <div>
                {listBullets}
                    <div className="handle" style={{ userSelect: 'none' }}>
                            
                        <img src={require('./icons/Ship.png')} alt='Weee' style={{ pointerEvents: 'none', userSelect: 'none', width: 100, height: 100 }} />
                    </div>
                </div>
            </Draggable>
        </div>)
}