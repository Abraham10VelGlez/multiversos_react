import React from 'react'

export default function Search_avg_gift({ onSubmit, valorin, onChange }) {

    return (
        <>
            <form onSubmit={onSubmit}>
                Buscador de Gifs<br></br>
                <input id='a' name='a' type='text' value={valorin} onChange={onChange} />
            </form>
        </>
    )
}