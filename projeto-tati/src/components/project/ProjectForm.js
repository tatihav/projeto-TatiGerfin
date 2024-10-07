import {useEffect, useState} from 'react'

import styles from './Project.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}) {
const [categories, setCategories] = useState([])
const [project, setProject] = useState(projectData || {})

useEffect(() =>{
    fetch("http://localhost:5000/categories",{
        method: "GET",
        headers:{
            'content-type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) =>{
        setCategories(data)
    })
    .catch((err) => console.log(err))
},[])

const submit = (e) => {
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
}
function handleChange(e) {
    setProject({...project, [e.target.name]: e.target.value })
    
}

function handleCategory(e) {
    setProject({...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    },

 } )
   
}
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text'
             text="Nome da despesa"
              name='name'
               placeholder='Insira o nome da despesa'
               handleChange={handleChange} 
               value={project.name || ''  }/>

            <Input type='number'
             text="Valor da despesa"
              name='budget' 
              placeholder='Insira o valor da despesa' 
              handleChange={handleChange}
              value={project.budget || '' }/>
          
           <Select 
           name="category_id" 
           text="Selecione a categoria"
           options={categories} 
            onChange={handleCategory}
            value={project.category ? project.category?.id : ''}/>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm