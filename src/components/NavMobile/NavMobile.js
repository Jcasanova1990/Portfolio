import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavMobile.module.scss';

function NavMobile() {
    const [isRotated, setIsRotated] = useState(false);
    const [listShown, setListShown] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
        setListShown(!listShown);
    };

    return (
        <nav className={styles.NavMobile}>
            <button className={styles.NavBtn} onClick={handleClick}>
                <span className={`${styles.NavBtnTop} ${isRotated ? styles.rotateTop : styles.revertTop}`}>|</span>
                <span className={`${styles.NavBtnMid} ${isRotated ? styles.fadeOut : styles.fadeIn}`}>|</span>
                <span className={`${styles.NavBtnBottom} ${isRotated ? styles.rotateBottom : styles.revertBottom}`}>|</span>
            </button>
            <div className={`${styles.NavContainer} ${listShown ? styles.expandContainer : styles.collapseContainer}`}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link className={styles.Link} to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.Link} to='/AboutMe'>
                            About Me
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.Link} to='/Projects'>
                            Projects
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.Link} to='/Contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavMobile;

