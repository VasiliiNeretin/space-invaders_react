import { Invader } from './Invader.js'
import React, { useState, useEffect } from 'react'
import { RegularButton, Grid } from 'fronton-react';

export function InvadersArmy(props) {


    let invaders = [];
    const [topSpace, setTopSpace] = useState(20);
    const [invading, setInvading] = useState(true);

    //Executes when player looses
    const stopInvasion = () => {
        setInvading(false);
        props.endFunc()
    }

    //spawns all the invaders
    const spawnInvaders = () => {
        for (let i = 0; i < 8 * 3; i++) {
            invaders[i] = <Invader endFunc={stopInvasion} />;
        }
    }

    //forces the invaders to move down
    const calculatePosition = () => {
        let elem = document.querySelector('div');
        setTopSpace((topSpace) => topSpace + 20);
        document.getElementById('Invaders').style.top = `${topSpace}px`;
    };

    const handleClick = () => {
        setInvading(!invading);
    }

    spawnInvaders();

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
            <Grid id='Invaders'
                columns={'12columns'}
                gap={5}
                style={{
                    position: 'absolute', width: '100%', height: 200, top: 0, left: 50,
                }}>
                {invaders}
            </Grid>
            <RegularButton style={{ position: 'absolute', top: 5 }} onClick={handleClick}> Начать захват!</RegularButton>
        </div>
    )
}