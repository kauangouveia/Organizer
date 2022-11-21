import * as Style from './styles'
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from '../../service';
import { X } from 'phosphor-react';




type dataTypeLogin = {
    priority: string,
    task: string
}
type ModalAddNewTaskData = {
    showModal: boolean,
    setShowModal: Function,

}

export const ModalAddNewTask = ({ showModal, setShowModal }: ModalAddNewTaskData) => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm<dataTypeLogin>();


    const onSubmit: SubmitHandler<dataTypeLogin> = async (data) => {
        try {

            const token = localStorage.getItem('@token')

            const response = await api.post("/create-task", data, {
                headers: {
                    authorization: `Bearer ` + token
                },
            }
            )
            
            
            setShowModal(false)
            location.reload()
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Style.ContainerModal>
            <Style.ContentModal onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1>ADICIONAR TAREFA</h1>
                    <X size={40} cursor='pointer' onClick={() => setShowModal(false)} />
                </div>
                <Style.Input {...register("task")} required />
                <Style.Select {...register("priority")}>
                    <option value="ALTA">Alta</option>
                    <option value="MEDIA">Média</option>
                    <option value="BAIXA" >Baixa</option>
                </Style.Select>
                <Style.Button>
                    ADICIONAR
                </Style.Button>
            </Style.ContentModal>
        </Style.ContainerModal>
    )
}