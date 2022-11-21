import * as Style from "./styles"
import calendar from '../../assets/calendar.jpg'
import cube from '../../assets/cube.svg'
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const Login = () => {

    type dataTypeLogin = {
        email: string,
        password: string
    }


    const { register, handleSubmit, watch, formState: { errors } } = useForm<dataTypeLogin>();
    const navigate = useNavigate();

    const token = localStorage.getItem("@token")



    useEffect(() => {
        if (token != '') {
            navigate('/list')
        }
    }, [])

    const onSubmit: SubmitHandler<dataTypeLogin> = async (data) => {
        try {

            const response = await api.post("/login",
                data
            )

            localStorage.setItem('@token', response.data.token)
            navigate('/list')
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <>
            <Style.ContentLogin>
                <Style.ContainerLogin>
                    <Style.ContainerForm onSubmit={handleSubmit(onSubmit)}>
                        <img alt="check calendar" src={calendar} />
                        <input type='e-mail' placeholder="Seu E-mail" {...register('email')} />
                        <input type='password' placeholder="Sua Senha" {...register('password')} />
                        <button>ENTRAR</button>
                    </Style.ContainerForm>
                    <Style.ContainerAboutUs>
                        <img alt="check calendar" src={cube} />
                        <div>
                            <h1>Organize
                                <br />or Time and
                                <br />have more performace.</h1>
                        </div>
                    </Style.ContainerAboutUs>
                </Style.ContainerLogin>
            </Style.ContentLogin>
        </>
    )
}