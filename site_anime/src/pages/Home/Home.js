import styles from './Home.module.scss';
import Popup from '../Popup/Popup';


function Home() {
    return (
        <div className={styles.main}>
            <h1>Home</h1>
            <Popup message="reussis" title='thomas la merde ' title_button='toto' />

        </div>
    )

}

export default Home;
