import { Invader } from './Invader.js'
import React, { useState, useEffect } from 'react'

export function InvadersArmy(props) {


    let invaders = [];
    const stopInvasion = () => {
        setInvading(false);
        props.endFunc()
    }
    const spawnInvaders = () => {
        for (let i = 0; i < 8 * 3; i++) {
            invaders[i] = <Invader endFunc={stopInvasion} />;
        }
    }

    spawnInvaders();

    const [topSpace, setTopSpace] = useState(20);

    const calculatePosition = () => {
        let elem = document.querySelector('div');
        setTopSpace((topSpace) => topSpace + 20);
        document.getElementById('Invaders').style.top = `${topSpace}px`;
    };

    const [invading, setInvading] = useState(true);
    const handleClick = () => {
        setInvading(!invading);
    }



    useEffect(() => {

        let myInterval = setInterval(() => {
            if (invading) {
                calculatePosition();
            };
        }, 1000)

        return () => {
            clearInterval(myInterval);

        }
    });

    return (
        <div>

            <div id='Invaders' style={{
                position: 'absolute', width: '100%', height: 200, top: 0, left: 50,
                alignContent: 'center',
                justifyContent: 'center', display: 'grid',
                gridGap: 12,
                gridTemplateColumns: '8vw 8vw 8vw 8vw 8vw 8vw 8vw 8vw ',
            }}>

                {invaders}
            </div>
            <button style={{ position: 'absolute', top: 5 }} onClick={handleClick}> Начать захват!</button>
        </div>
    )
}