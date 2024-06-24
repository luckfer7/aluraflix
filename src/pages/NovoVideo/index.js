import { useEffect, useState } from 'react';
import styles from './NovoVideo.module.css';

function NovoVideo () {

    const [titulo, setTitulo] = useState('')
    const [valor, setValor] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    function Guardar (evento) {
        evento.preventDefault()
        const paraObj = {
            titulo,
            valor,
            imagem,
            categoria 
        }
        console.log(paraObj)

        fetch("http://localhost:3000/0",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(paraObj)
        }).then(response => response.json()).then(data => {
            console.log("video adicionado ao json", data);
        }).catch((err)=> {
            console.log(err)
        })

    }


    function temTexto (evento) {
        setValor (evento.target.value)
        
    }

    function temTextoTitulo (evento) {
        setTitulo (evento.target.value)
    }

    function temTextoImagem (evento) {
        setImagem (evento.target.value)
    }

    function temCategoria (evento) {
        setCategoria (evento.target.value)
    }

    // useEffect(() => {
    //     const guardarVideo = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             titulo,
    //             valor,
    //             imagem,
    //             categoria
    //         })
    //     }
    // })
    return (
        <section className={styles.secao}>

            <h1>NOVO VÍDEO</h1>
            <h4>COMPLETE O FORMULARIO PARA CRIAR UM NOVO CARD DE VÍDEO</h4>

            <form className={styles.formContainer} onSubmit={Guardar}>
                <h2>Criar Card</h2>

                <div className={styles.containerInput}>
                    <div>
                        <label>Título</label>
                        <input value={titulo} onChange={temTextoTitulo} placeholder='Digite o titulo' />
                    </div>
                    
                    <div>
                       <label>Categoria</label>
                        <select onChange={temCategoria} required>
                            <option>Selecione uma categoria</option>
                             <option>Front-end</option>
                             <option>Back-end</option>
                             <option>Mobile</option>
                        </select>
                    </div>
                    
                </div>

                <div className={styles.containerInput}>
                    <div>
                        <label>Imagem</label>
                        <input onChange={temTextoImagem} placeholder='Cole o link da imagem' />
                    </div>
                    
                    <div>
                        <label>Vídeo</label>
                        <input value={valor} onChange={temTexto} placeholder='Digite o link do vídeo' />
                    </div>
                </div>

                <div className={styles.containerInput__separate}>
                    <label>Descrição</label>
                    <input  placeholder='Sobre o que é esse vídeo?' />
                </div>

                <div className={styles.btnArea}>
                    <button>Guardar</button>
                    <button>Limpar</button>
                </div>
               
            </form>
        </section>
        
    )
}

export default NovoVideo;