

export default function Footer ({perguntas, contador, listaIcones, conclusao}) {

    function resultadofinal () {

        return (   
            <>                  
            { conclusao ? (<> <div className="emoji-msg"><img src="./img/sad.png" alt="" /><h2>Putz...</h2></div>
             <div className="textinho"><span>Ainda faltam alguns... Mas não desanime</span></div> </> ) : 
             (<> <div className="emoji-msg"><img src="./img/party.png" alt="" /><h2>Parabéns!</h2></div>
             <div className="textinho"><span>Você não esqueceu de nenhum flashcard!</span></div> </> )}        
             </>    
        )
    }    

    return (
         
            <div className="footer">
            {listaIcones.length === perguntas.length ? (resultadofinal()): (null)}
           <span>{contador}/{perguntas.length} CONCLUÍDOS</span> 
           <div className="icones">
           {listaIcones}
           </div>
            </div>
    )
}