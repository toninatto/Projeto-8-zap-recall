import React from "react";

export default function OpcaoAberta ({perguntas, respostas, mudaGrade, index}) {

    const [resposta, setResposta] = React.useState(true);

    function abrir () {
        setResposta(false)
    }

    return (
        <>
        {resposta ? <div className="pergunta-aberta">
        <span>{perguntas}</span>
        <img src="./img/setinha.png" alt="" onClick={abrir} />
        </div> : 
        <div className="resposta-aberta">
            <span>{respostas}</span>
            <div className="botoes-resposta">
                <button onClick={() => mudaGrade(index, 'nao')}><p>Não lembrei</p></button>
                <button onClick={() => mudaGrade(index, 'quase')}><p>Quase não lembrei</p></button>
                <button onClick={() => mudaGrade(index, 'zap')}><p>Zap!</p></button>
            </div>
            </div>}
        </>
    )
}