import Enunciado from "./Enunciado";
import Botao from "./Botao";
import { useState } from "react";
import Proximo from "./Proximo";

function Perguntador(P){
    const aleatorio = Math.floor(Math.random() * (P.length));
    return P[aleatorio];
}

function Embaralhar(A){

    // Algoritmo Fisher-Yates
    for(let i= A.length - 1; i > 0; i--){
        const aleatorio = Math.floor(Math.random() * (i+1));
        [A[i],A[aleatorio]] = [A[aleatorio], A[i]];
    }

}
const PerguntaArray = [
    {pergunta: "quanto que é 1+1", alts:[1,2,3,4], altCorreta: 2},
    {pergunta: "quanto que é 2+2", alts:[1,2,3,4], altCorreta: 4},
    {pergunta: "Qual a capital do Brasil", alts:["Brasilia","Rio de Janeiro","São Paulo","Salvador"], altCorreta: "Brasilia"}

]

function sortearPergunta(){
    const nova = Perguntador(PerguntaArray);
    Embaralhar(nova.alts);
    return nova;
}


export default function Perguntas(){

    const [pergunta, setPergunta] = useState(() => sortearPergunta());
    const [resposta,setResposta] = useState();
    const [clicavel,setClicavel] = useState(true);

     function proximaPergunta(){
        setPergunta(sortearPergunta());
        setResposta();
        setClicavel(true);
    }


    return(<>
    <Enunciado texto={pergunta.pergunta}/>
    <div>
        <Botao numero={1} pergunta={pergunta} resposta={resposta} setResposta={setResposta} clicavel={clicavel} setClicavel={setClicavel}></Botao>
        <Botao numero={2} pergunta={pergunta} resposta={resposta} setResposta={setResposta} clicavel={clicavel} setClicavel={setClicavel}></Botao>
        <Botao numero={3} pergunta={pergunta} resposta={resposta} setResposta={setResposta} clicavel={clicavel} setClicavel={setClicavel}></Botao>
        <Botao numero={4} pergunta={pergunta} resposta={resposta} setResposta={setResposta} clicavel={clicavel} setClicavel={setClicavel}></Botao>
        <Proximo clicavel={clicavel} onProximo={proximaPergunta}></Proximo>
    </div>
    </>)
}