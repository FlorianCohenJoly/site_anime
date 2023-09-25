import styles from './Home.module.scss';
import Popup from '../Popup/Popup';
import Header from '../../layout/Header/Header';
import dessinGakorp from '../../assets/dessinGakorp.png';
import BlocTitle from '../../components/BlocTitle';

function Home() {
    return (



        <div style={{ backgroundImage: `url(${dessinGakorp})` }} className={styles.fond}>


            <div className={styles.main}>




                <Header />

                {/* <div className={styles.container}>
                    <Popup message="reussis" title='thomas la merde ' title_button='toto' />
                </div> */}

                <div className={styles.titre}>
                    <BlocTitle titre="Découvre un animé de folie" taille="500px" hauteur="100px" />
                </div>

            </div>
        </div>
    )

}

export default Home;
