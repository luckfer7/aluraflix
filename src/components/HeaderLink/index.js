import { Link } from 'react-router-dom';
import styles from './HeaderLink.module.css';

function HeaderLink ({children, url}) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default HeaderLink;