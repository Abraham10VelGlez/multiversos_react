import React from "react"

export default function Componente9() {

    return (
        <>
            <form method="POST" action="/ruta">
                <h1>Reactjs + ExpressJS</h1>
                <br />
                <br />
                <input type="text" id="a" name="a" placeholder="USUARIO" />
                <br />
                <br />
                <input type="text" id="b" name="b" placeholder="CONTRASEÑA" />
                <br />
                <br />
                <button>Acceder</button>
            </form>
        </>
    )
}