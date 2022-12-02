import * as Styles from './styles'
import deleteTask from '../../../../assets/delete.svg'
import updateTask from '../../../../assets/edit-document.svg'
import { api } from '../../../../service'

type taskData = {
    priority: string,
    task: string
    date: string
    id: number
}

const removeItem = async (idTask: number) => {
    try {
        const response = await api.delete('/delete-task', {
            data: {
                id: idTask
            }
        })
        location.reload()

    } catch (error) {
        console.log('error')
    }
}

export const Task = ({ priority, task, date, id }: taskData) => {
    return (
        <Styles.ContainerList>
            <Styles.Priority priority={priority}>
                <h1>{priority === 'MEDIA' ? 'MÉDIA' : priority === 'BAIXA' ? 'BAIXA' : 'ALTA'}</h1>
            </Styles.Priority>
            <Styles.OurAsk>
                <p>{task}</p>
            </Styles.OurAsk>
            <Styles.DateAsk>
                <p>{date.split('T')[0]}</p>
            </Styles.DateAsk>
            <Styles.ActionsAsk>
                <img src={deleteTask} alt='remove' onClick={() => { removeItem(id) }} />
            </Styles.ActionsAsk>
        </Styles.ContainerList>
    )
}