import styles from './Rodape.module.css'
import logo from './LogoMain.png'

function Rodape () {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt='AluraFlix logo'></img>
        </footer>
    )
}

export default Rodape;