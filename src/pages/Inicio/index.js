
import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import videos from 'json/db.json';


function Inicio() {

    
    return (
        <>
            <Banner />
            <main className={styles.main}>
                
                {videos.map((video) => {
                    return <Card {...video} key={video.id}/>
                })}
               
               {/* provavelmente, teremos que pegar o valor dos inputs,), colocar no json, e fazer um card com eles. ai exbir os cards aqui. */}
            </main>
        </>
        
    )
}

export default Inicio;