import * as Styles from './styles'
import cube from '../../assets/cube.svg'
import { Task } from './components/Ask'
import { useEffect, useState } from 'react'
import { api } from '../../service'
import { ModalAddNewTask } from '../../components/ModalAddNewTask'
import { useNavigate } from "react-router-dom";


export const ListAssignment = () => {

    const [list, setList] = useState([{
        created_at: '',
        finished_at: null,
        id_task: 1,
        id_user: 1,
        priority: '',
        task: ''
    }])

    const [showModal, setShowModal] = useState(false)

    const token = localStorage.getItem('@token')
    const navigate = useNavigate();

    const getTasks = async () => {
        const token = localStorage.getItem('@token')
      

        

            try {
                const token = localStorage.getItem('@token')

                const response = await api.get('/list-task', {
                    headers: {
                        authorization: `Bearer ` + token
                    },
                })
                setList(response.data.listTask)
                console.log(response)
            } catch (error) {

            }
    }

    useEffect(() => {
        if (token === null){    
            navigate('/')
            return
        }
        getTasks()
    }, [])

    return (
        <>
            {showModal &&
                <ModalAddNewTask setShowModal={setShowModal} showModal={showModal} />
            }
            <Styles.ListAssignmentContainer>
                <Styles.ContentList>
                    <Styles.ContentHeader>
                        <img alt="logo" src={cube} />
                    </Styles.ContentHeader>
                    <Styles.ContentActions>
                        <button onClick={() => setShowModal(true)}>ADICONAR TAREFA</button>
                        <Styles.Actions>
                            <h3>PRIORIDADE</h3>
                            <h3>SUA TAREFA</h3>
                            <h3>DATA</h3>
                            <h3>ACÕES</h3>
                        </Styles.Actions>
                    </Styles.ContentActions>
                    <Styles.List>
                        <Styles.ListContent>
                            {list.map((item) => (
                                <Task date={item.created_at} task={item.task} priority={item.priority} key={item.id_task} id={item.id_task} />
                            ))}
                        </Styles.ListContent>
                    </Styles.List>
                </Styles.ContentList>
            </Styles.ListAssignmentContainer>
        </>
    )
}