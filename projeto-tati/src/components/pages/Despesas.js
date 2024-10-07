import {useNavigate} from 'react-router-dom'
import styles from './Despesas.module.css'
import ProjectForm from '../project/ProjectForm'

function Despesas (){
    const navigate = useNavigate()
    function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/relatorios',{message:'Despesa adicionada com sucesso'})
        })
    .catch(err => console.log (err))
    }

    return (
    <div className={styles.despesas_container}>
        <h1> Adicione aqui suas despesas!</h1>
        <p> Defina seus gastos mensais</p>
       <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
    )

}

export default Despesas