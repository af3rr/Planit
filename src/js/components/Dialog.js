import React from 'react'
import Animate from 'rc-animate';

import Hoverable from '../modifiers/Hoverable'

import '../../css/components/dialog.css';


function Dialog(props) {
    let overlayCSS = () => ({
        background: props.overlay ? '#FFFFFF50' : 'transparent'
    })


    let dialogCSS = () => ({
        width: props.width || 'auto',
        height: props.height || 'auto'
    })


    return (
        <Animate transitionName="fade">
            {props.visible ?
                <div key={0} className='dialog-overlay' style={overlayCSS()}>
                    <div className='dialog' style={dialogCSS()}>
                        <header>
                            <h2> {props.title} </h2>
                            
                            <button onClick={props.close}>
                                <Hoverable scale={1.25}> 
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.87632 6.71427L11.415 3.16813L12.1447 2.43684C12.2524 2.32896 12.2524 2.15366 12.1447 2.04579L11.3639 1.26333C11.2563 1.15545 11.0813 1.15545 10.9737 1.26333L6.70528 5.54075L2.43689 1.26298C2.32924 1.1551 2.15431 1.1551 2.04666 1.26298L1.26551 2.04544C1.15786 2.15332 1.15786 2.32862 1.26551 2.4365L5.53424 6.71427L1.26551 10.9917C1.15786 11.0996 1.15786 11.2749 1.26551 11.3827L2.04632 12.1652C2.15397 12.2731 2.3289 12.2731 2.43655 12.1652L6.70528 7.88778L10.2439 11.4339L10.9737 12.1652C11.0813 12.2731 11.2563 12.2731 11.3639 12.1652L12.1447 11.3827C12.2524 11.2749 12.2524 11.0996 12.1447 10.9917L7.87632 6.71427Z" fill="#424959"/>
                                        <path d="M2.65615 1.82353C2.65615 2.27835 2.28541 2.64705 1.82808 2.64705C1.37074 2.64705 1 2.27835 1 1.82353C1 1.36871 1.37074 1 1.82808 1C2.28541 1 2.65615 1.36871 2.65615 1.82353Z" fill="#424959"/>
                                        <path d="M2.65615 11.5938C2.65615 12.0486 2.28541 12.4173 1.82808 12.4173C1.37074 12.4173 1 12.0486 1 11.5938C1 11.139 1.37074 10.7703 1.82808 10.7703C2.28541 10.7703 2.65615 11.139 2.65615 11.5938Z" fill="#424959"/>
                                        <path d="M12.4016 11.5938C12.4016 12.0486 12.0308 12.4173 11.5735 12.4173C11.1161 12.4173 10.7454 12.0486 10.7454 11.5938C10.7454 11.139 11.1161 10.7703 11.5735 10.7703C12.0308 10.7703 12.4016 11.139 12.4016 11.5938Z" fill="#424959"/>
                                        <path d="M12.4173 1.82353C12.4173 2.27835 12.0466 2.64705 11.5892 2.64705C11.1319 2.64705 10.7612 2.27835 10.7612 1.82353C10.7612 1.36871 11.1319 1 11.5892 1C12.0466 1 12.4173 1.36871 12.4173 1.82353Z" fill="#424959"/>
                                    </svg>
                                </Hoverable>
                            </button>
                        </header>

                        {props.children}
                    </div>
                </div>
            : null}
        </Animate>
    )
}

export default Dialog