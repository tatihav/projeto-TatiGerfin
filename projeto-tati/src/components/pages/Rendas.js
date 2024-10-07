
import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from '../layout/Linkbutton'
import styles from './Rendas.module.css'
 

function Rendas(){

    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }
    return (
    <div className={styles.projects_container}>
        <div className={styles.title_container}>
            <h1> Rendas  </h1>
           
            <LinkButton to="/Despesas" text="Criar Despesa" />
        </div>
    
    {message && <Message type="sucess" msg={message} />}

    <Container customClass="start">
        <p>Projetos...</p>
    </Container>
    </div>
    )
  }

export default Rendas