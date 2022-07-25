import Opcao from "./opcao";
import OpcaoAberta from "./opcaoaberta";


export default function Perguntas ({ index, status, mudaStatus, perguntas, respostas, grade, mudaGrade }) {

    return (
        <>
        {status ? <Opcao index={index} grade={grade} mudaStatus={mudaStatus}/> : 
        <OpcaoAberta perguntas={perguntas} respostas={respostas} mudaGrade={mudaGrade} index={index}/>}
        </>
    )
}