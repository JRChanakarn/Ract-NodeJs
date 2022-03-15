import React, { useState } from 'react'
import axios from 'axios'

function Quote(){

    const [text,setText] = useState("");
    const [author , setAuther] = useState("");

    function getQuote(){
        axios.get('http://localhost:4999',{crossdomain: true})
            .then(response =>{

                setText(response.data.text);
                setAuther(response.data.author);

            })

    }



    return ( 
        <div>
            <button onClick={getQuote}>
                Generate Quote
            </button>
            <h1>{text}</h1>
            <h3>{"-"+author}</h3>
        </div>
        )

}

export default Quote