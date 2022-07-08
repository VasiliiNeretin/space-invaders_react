import React, { useEffect } from 'react'

export function Invader() {

    
    return (
        <img id={'Invader'} className='Invader' src={require('./icons/SpaceInvader1.png')} alt='Rondondon' 
        style={{ width: 50, height: 50, backgroundColor: 'red' }} />
    )
}