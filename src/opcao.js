
export default function Opcao ({index, mudaStatus, grade}) {
    return (
        <>
        <button className={`${grade}`} onClick={() => mudaStatus(index)}><span>Pergunta {index + 1}</span><img src={`./img/${grade}.png`} alt="" /></button>
        </>

    )
}