import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import { ReactNode } from 'react'

import { HTMLAttributes } from 'react';

import * as React from "react";


interface spanProps extends HTMLAttributes<HTMLSpanElement> {

    children?: ReactNode;
}

function Span({ children, ...rest }: spanProps) {
    return (
        <span {...rest}>{children}</span>
    )
}

export function Likesprop() {
    const [likes, setLike] = useState<number>(0)
    const [deslikes, setDeslike] = useState<number>(0)
    let [changeIcon, setChangeIcon] = useState(<FontAwesomeIcon icon={faThumbsUp} />)


    function handleIcon() {
        setChangeIcon(<FontAwesomeIcon icon={faThumbsUp} bounce />)
        setLike(likes + 1)
    }

    const tempoEspera = 1000
    React.useEffect(() => {
        const tempoSaida = setTimeout(setChangeIcon, tempoEspera)
        return () => clearTimeout(tempoSaida)
    }, [changeIcon])


    return (
        <div className='divlikesprop'>
            <h3>Deixe sua avaliaçao</h3>
            <div className='likesprop'>
                <Span
                    className='spanclick' onClick={handleIcon} ><i>{changeIcon ? changeIcon : <FontAwesomeIcon icon={faThumbsUp} />}</i> </Span>
                <p>{likes}</p>
                <Span className='spanclick' onClick={() => setDeslike(deslikes + 1)}> <FontAwesomeIcon icon={faThumbsDown} /></Span>
                <p >{deslikes}</p>
            </div>
        </div>
    );
}
