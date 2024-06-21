import styles from './NovoVideo.module.css';

function NovoVideo () {
    return (
        <section className={styles.secao}>

            <h1>NOVO VÍDEO</h1>
            <h4>COMPLETE O FORMULARIO PARA CRIAR UM NOVO CARD DE VÍDEO</h4>

            <form className={styles.formContainer}>
                <h2>Criar Card</h2>

                <div className={styles.containerInput}>
                    <div>
                        <label>Título</label>
                        <input placeholder='Digite o titulo' />
                    </div>
                    
                    <div>
                       <label>Categoria</label>
                        <select placeholder='Selecione uma categoria' /> 
                    </div>
                    
                </div>

                <div className={styles.containerInput}>
                    <div>
                        <label>Imagem</label>
                        <input placeholder='Cole o link da imagem' />
                    </div>
                    
                    <div>
                        <label>Vídeo</label>
                        <input  placeholder='Digite o link do vídeo' />
                    </div>
                </div>

                <div className={styles.containerInput__separate}>
                    <label>Descrição</label>
                    <input placeholder='Sobre o que é esse vídeo?' />
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