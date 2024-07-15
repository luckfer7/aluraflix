import styles from './Card.module.css'

async function deletarCard (id, onDelete) {
    fetch(`https://my-json-server.typicode.com/luckfer7/aluraflix-api${id}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    }).then((response) => {
        if(!response.ok) {
            throw new Error ("Algo não funcionou")
        }
    }).then(() => {
        onDelete(id);
    })
    .catch((e) => {
        console.log(e)
    })
    
}

async function editCard (id, onEdit) {
    fetch(`https://my-json-server.typicode.com/luckfer7/aluraflix-api${id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"}
    }).then ((response) => {
        if(!response.ok) {
            throw new Error ("Não foi possível editar o card")
        }
    }).then (() => {
        onEdit(id);
    })
    .catch((e) => {
        console.log(e)
    })
}

function Card ({id, imagem, titulo, onDelete, onEdit}) {
    return (
        <div className={styles.card}>
            <img src={imagem} className={styles.imagem} alt='imagem do vídeo'>
            </img>
            {/* <h2>{titulo}</h2> */}
            <div className={styles.editarAndDeletar}>
                <a onClick={() => deletarCard(id, onDelete)} 
                className={styles.btDeletar}>DELETAR</a> <a onClick={() => editCard(id, onEdit)} className={styles.btEditar}>EDITAR</a>
            </div>
        </div>
    )
}
 export default Card;