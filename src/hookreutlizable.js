import { useState } from 'react'
export const use_search_gif = () => {

    const [gifs, setgifs] = useState([]);
    const [valorin, setvalorin] = useState();

    //creacion de variable de estado cargando
    const [carga, setcarga] = useState(false);

    //captura la palabra a buscar
    const onChange = (event) => {
        const keyword = event.target.value;
        setvalorin(keyword)
    }

    //carga de gifs haciendo peticion a la api de 
    const getgifs = async (keyworduser) => {
        //interpola la cadena con estos signos de puntuacion conocidos como acentos
        const url = `https://api.giphy.com/v1/gifs/search?api_key=zztQhfJ5hsypNqNyPOZXQIGYODCwJFF9&q=${keyworduser}`;        

        setcarga(true)
        //creacion de promesa para hacer lenta la peticion en 3seg
        await new Promise(resolve=>{
            setTimeout(()=>{
                resolve(true)
            },3000)
        })

        const response = await fetch(url);
        const data = await response.json();
        setcarga(false)
        //console.log(data);
        return data.data;
    }

    //implementar un hook
    const onSubmit = async (c) => {
        c.preventDefault();
        //console.log("hola datoos");
        const gifts_x = await getgifs(valorin);
        console.log(gifts_x);
        setgifs(gifts_x);
    }

    


    return {
        valorin,
        onChange,
        gifs,
        onSubmit,
        carga
    }

}