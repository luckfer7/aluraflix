import styles from './Card.module.css'

function Card ({id, image, title}) {
    return (
        <div className={styles.card}>
            <img src={image} className={styles.imagem}>
            </img>
            <h2>{title}</h2>
            <div className={styles.btns}>
                <button>DELETAR</button> <button>EDITAR</button>
            </div>
        </div>
    )
}

export default Card;