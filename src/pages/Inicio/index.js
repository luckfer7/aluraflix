import Header from 'components/Header';
import styles from './Inicio.module.css';
import Rodape from 'components/Rodape';
import Banner from 'components/Banner';
import Card from 'components/Card';

function Inicio() {
    return (
        <>
            <Header />
            <Banner />
            <main className={styles.main}>
                
               
            </main>
            
            <Rodape />
        </>
        
    )
}

export default Inicio;