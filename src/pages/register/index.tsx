import * as Style from "./styles"
import calendar from '../../assets/calendar.jpg'
import cube from '../../assets/cube.svg'
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../service";
import { useNavigate } from "react-router-dom";

type dataType = {
    name: string,
    cpf: string,
    email: string,
    password: string
}

export const Register = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm<dataType>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<dataType> = async (data) => {
        try {
            await api.post("/create-user",
                data
            )

            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };



    return (
        <>
            <Style.ContentRegister>
                <Style.ContainerRegister>
                    <Style.ContainerForm onSubmit={handleSubmit(onSubmit)}>
                        <img alt="logo" src={cube} />
                        <input type='text' placeholder="Seu Nome" {...register('name')} required />
                        <input type='text' placeholder="Seu CPF" {...register('cpf')} required />
                        <input type='e-mail' placeholder="Seu E-mail" {...register('email')} required />
                        <input type='password' placeholder="Sua Senha" {...register('password')} required />
                        <button>CADASTRAR-SE</button>
                    </Style.ContainerForm>
                </Style.ContainerRegister>
            </Style.ContentRegister>
        </>
    )
}