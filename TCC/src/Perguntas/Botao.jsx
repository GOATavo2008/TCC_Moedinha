import { useState,useEffect } from "react";



function mudarCor(clicavel,correta,valor,resposta){
    
    if (clicavel == false){
        if(resposta == valor){
            if(correta == valor){
                return "green"
            }
            else{
                return "red"
        }
        }else{
            if(correta == valor){
                return "green"
            }
        }
    }
    else{
        return "white"
    }
    
    
}

export default function Botao(props){

    let correta = props.pergunta.altCorreta;
    let valor = props.pergunta.alts[props.numero - 1]
    

    return(<button style={{backgroundColor: mudarCor(props.clicavel,correta,valor,props.resposta)}}

    onClick={() => {if(props.clicavel == true){props.setResposta(valor); props.setClicavel(false)}}}

    type="button">{valor}</button>)
}

