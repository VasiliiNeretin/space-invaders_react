import React, { useEffect, useRef } from 'react'

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

export function Invader(props) {

    const invaderRef = useRef(null);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (elementsOverlap(invaderRef.current, document.getElementById('Ship'))) {
                
                props.endFunc();
                clearInterval(myInterval);
            }
        }, 10)
        return () => {
            clearInterval(myInterval);
        }
    });

    return (
        <img id={'Invader'} ref={invaderRef} className='Invader' src={require('./icons/SpaceInvader1.png')} alt='Rondondon'
            style={{ width: 50, height: 50, backgroundColor: 'transparent' }} />
    )
}