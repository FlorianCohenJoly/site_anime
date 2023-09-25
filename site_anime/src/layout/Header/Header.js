import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
    return (
        <header className={styles.main}>
            <div className={styles.logo}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjHtt8GM1NaPEQlldWSivw5dkY9KLWiSNxQ&usqp=CAU"
                    alt="logo"
                />
            </div>

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {/* <li className={styles.link}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.link}>
                        <Link to="/">About</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
