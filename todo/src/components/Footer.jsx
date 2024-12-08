import { FaLinkedin, FaGithubSquare} from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <a href="https://www.linkedin.com/in/vinilimadev/" target="_blank"><FaLinkedin/></a>
                <a href="https://github.com/v-L1ma/" target="_blank">
                    <FaGithubSquare />
                </a>
            </div>
            <div className={styles.nome}>
                <p>Criado por Vinicius Lima</p>
            </div>
        </footer>
    )
}

export default Footer
