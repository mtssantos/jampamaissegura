import React from "react";
import { Container, ErrorText, FormContainer, Header, Input, Label, Separator, SubmitButton, SubmitText, Title } from "./styles";
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
    nome: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('O email é obrigatório'),
    cpf: Yup.string()
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
      .required('O CPF é obrigatório'),
    crea: Yup.string().required('O CREA é obrigatório'),
    telefone: Yup.string().required('O telefone é obrigatório'),
    senha: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('A senha é obrigatória'),
});


const SingUp = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data: any) => {
        console.log(data);
    };


    return(
        <Container>
            <Header>
                <Title>Cadastre-se</Title>
            </Header>
            <Separator />

            <FormContainer>
                <Label>Nome:</Label>
                <Controller
                    control={control}
                    name="nome"
                    render={({ field: { onChange, value } }) => (
                    <>
                        <Input placeholder="Digite seu nome" value={value} placeholderTextColor={"#fff"} onChangeText={onChange} />
                        {errors.nome && <ErrorText>{errors.nome.message}</ErrorText>}
                    </>
                    )}
                />

                <Label>Email:</Label>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                    <>
                        <Input placeholder="Digite seu email" value={value} placeholderTextColor={"#fff"} onChangeText={onChange} />
                        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    </>
                    )}
                />

                <Label>CPF:</Label>
                <Controller
                    control={control}
                    name="cpf"
                    render={({ field: { onChange, value } }) => (
                    <>
                        <Input placeholder="Digite seu CPF (000.000.000-00)" value={value} placeholderTextColor={"#fff"} onChangeText={onChange} />
                        {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
                    </>
                    )}
                />

                <Label>Telefone:</Label>
                <Controller
                    control={control}
                    name="telefone"
                    render={({ field: { onChange, value } }) => (
                    <>
                        <Input placeholder="Digite seu telefone" placeholderTextColor={"#fff"} value={value} onChangeText={onChange} />
                        {errors.telefone && <ErrorText>{errors.telefone.message}</ErrorText>}
                    </>
                    )}
                />

                <Label>Senha:</Label>
                <Controller
                    control={control}
                    name="senha"
                    render={({ field: { onChange, value } }) => (
                    <>
                        <Input placeholder="Digite sua senha" secureTextEntry value={value} placeholderTextColor={"#fff"} onChangeText={onChange} />
                        {errors.senha && <ErrorText>{errors.senha.message}</ErrorText>}
                    </>
                    )}
                />

                <SubmitButton onPress={handleSubmit(onSubmit)}>
                    <SubmitText>Enviar</SubmitText>
                </SubmitButton>
                </FormContainer>
        </Container>
    );
}

export default SingUp;