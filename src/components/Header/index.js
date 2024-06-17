import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './LogoMain.png';
import HeaderLink from 'components/HeaderLink';

function Header () {
    return (
        <header className={styles.header}>
            <Link to='./'>
                <img src={logo} alt='aluraflix logo'></img>
            </Link>
            <nav>
                <HeaderLink url="./">HOME</HeaderLink>
                <HeaderLink url="./NovoVideo">NOVO VÍDEO</HeaderLink>
            </nav>
        </header>
        
    )
}

export default Header;