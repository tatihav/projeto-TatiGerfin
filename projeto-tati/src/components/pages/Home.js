import styles from './Home.module.css'
import finanças1 from '../../img/finanças1.png'
import Linkbutton from '../layout/Linkbutton'

function Home(){
    return (
     <section className={styles.home_container}> 
        <h1> Bem-vindo ao <span>GerFin</span> 
        </h1>
        <p>Comece a gerenciar sua vida financeira agora mesmo!</p>
        <Linkbutton to="/Despesas" text="Criar Projeto" />
        <img src={finanças1} alt="GerFin" />

     </section>
    )
}

export default Home