
export default function Inicial (props) {

    return (
        <div className="tela-inicial">
        <img src="./img/logo.png" alt="logo" />
        <h1>ZapRecall</h1>
        <button onClick={props.iniciar}><span>Iniciar Recall!</span></button>
        </div>
    )
}