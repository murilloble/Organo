import './Colaborador.css'

export const Colaborador = ({nome, imagem, caracteristica, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{caracteristica}</h5>
            </div>
        </div>
    )
}