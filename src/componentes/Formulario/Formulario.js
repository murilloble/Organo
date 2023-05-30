import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { Botao } from '../Botao/Botao'
import { useState } from 'react'

export const Formulario = (props) => { 
 
    const [nome, setNome] = useState('')
    const [caracteristica, setCaracteristica] = useState('')
    const [imagem, setImagem] = useState('')
    const [jogos, setJogos] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            caracteristica,
            imagem,
            jogos
        })
        setNome('')
        setCaracteristica('')
        setImagem('')
        setJogos('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Player</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Característica" 
                    placeholder="sua característica no jogo"
                    valor={caracteristica}
                    aoAlterado={valor => setCaracteristica(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Jogos" 
                    itens={props.jogos}
                    valor={jogos}
                    aoAlterado={valor => setJogos(valor)}
                />
                <Botao> Criar Card </Botao>
           </form>
        </section>
    )
}