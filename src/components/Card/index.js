import styles from './Card.module.css'

function Card ({id, imagem, titulo}) {
    return (
        <div className={styles.card}>
            <img src={imagem} className={styles.imagem} alt='imagem do vídeo'>
            </img>
            {/* <h2>{titulo}</h2> */}
            <div className={styles.btnsContainer}>
                <button className={styles.btns} >DELETAR</button> <button className={styles.btns} >EDITAR</button>
            </div>
        </div>
    )
}

export default Card;