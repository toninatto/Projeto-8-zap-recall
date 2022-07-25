import React from "react";
import Perguntas from "./perguntas";
import Footer from "./footer";

export default function Teladois () {

    const repositorio = [{
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript",
        status: true,
        grade: 'play'
    },
    {
        pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces",
        status: true,
        grade: 'play'
    },
    {
        pergunta: "Componentes devem iniciar com __",
        resposta: "letra maiúscula",
        status: true,
        grade: 'play'
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "expressões",
        status: true,
        grade: 'play'
    },
    {
        pergunta: "O ReactDOM nos ajuda __",
        resposta: "interagindo com a DOM para colocar componentes React na mesma",
        status: true,
        grade: 'play'
    },
    {
        pergunta: "Usamos o npm para __",
        resposta: "gerenciar os pacotes necessários e suas dependências",
        status: true,
        grade: 'play'
    },
    {
        pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes ",
        status: true,
        grade: 'play'
    },
    {
        pergunta: "Usamos estado (state) para __",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        status: true,
        grade: 'play'
    }];

    const embaralhado = repositorio.sort(() => Math.random() - 0.5)

    const [perguntas, setPerguntas] = React.useState(embaralhado);
    
    const listaPerguntas = perguntas.map((pergunta, index) =>
    <Perguntas  index={index} status={pergunta.status} mudaStatus={mudaStatus} perguntas={pergunta.pergunta} respostas={pergunta.resposta} grade={pergunta.grade} mudaGrade={mudaGrade}/>)
    

    function mudaStatus (indexPergunta) {
        const novaLista = perguntas.map((pergunta, index) => 
        { if (index === indexPergunta){
            return ({
                ...pergunta, status: false
            })
        } else {
            return ({
                ...pergunta, status: true
            })
        }})
        
        setPerguntas([...novaLista]);
    }

    function mudaGrade (indexResposta, grade) {

        
        const novaLista = perguntas.map((pergunta, index) => 
        { if (index === indexResposta){
            return ({
                ...pergunta, status: true, grade: grade
            })
        } else {
            return ({
                ...pergunta, status: true
            })
        }})
        
        setPerguntas([...novaLista]);
        setContador(contador + 1);
        setAux([...aux, grade]);        
    }

    const [contador, setContador] = React.useState(0);
    const [aux, setAux] = React.useState([]);

    const listaIcones = aux.map(icone => {
        if (icone !== 'play') {
            return ( <img src={`./img/${icone}.png`} alt="" /> )
        }});
    
    const conclusao = aux.find(value => value === 'nao');
    

    return (
        <>
        <div className="logo-topo">
            <img src="./img/logo-pequeno.png" alt="logo-pequeno" />
            <h1>ZapRecall</h1>
        </div>
        <div className="perguntas">
            {listaPerguntas}
        </div>        
        <Footer perguntas={perguntas} contador={contador} listaIcones={listaIcones} conclusao={conclusao} />
        </>
    )
}