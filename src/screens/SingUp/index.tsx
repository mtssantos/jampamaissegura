import React from "react";
import { Container, ErrorText, ExitButton, Footer, FormContainer, Header, Input, Label, Separator, SubmitButton, SubmitText, Title } from "./styles";
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../../services/api/userService";
import IconWrapper from "../../components/IconWrapper";
import { ObrigatoryText } from "./styles";

const schema = Yup.object().shape({
    nome: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('O email é obrigatório'),
    cpf: Yup.string()
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
      .required('O CPF é obrigatório'),
    phone: Yup.string().required('O telefone é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('A senha é obrigatória'),
    password_confirmation: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('A senha é obrigatória'),
});


const SingUp = () => {
    const navigation = useNavigation<any>();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
   
    const onSubmit = async (data: any) => {
        const { nome, cpf, phone, password, password_confirmation } = data;

        const response = await createUser({
            nome,
            cpf,
            phone,
            password,
            confirmPassword: password_confirmation 
        });

        if (response.success) {
            Alert.alert(
                'Usuário criado com sucesso!',
                'Agora você pode fazer login com suas credenciais.',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('SingIn'),
                    },
                ]
            );
        } else {
            Alert.alert('Erro', 'Não foi possível criar o usuário. Tente novamente.');
        }
    };



    return(
        <Container>
            <Header>
                <Title>Cadastre-se</Title>
            </Header>
            <Separator />

            <FormContainer>
                <Label>Nome: <ObrigatoryText>*</ObrigatoryText></Label>
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

                <Label>CPF: <ObrigatoryText>*</ObrigatoryText></Label>
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

                <Label>Telefone: <ObrigatoryText>*</ObrigatoryText></Label>
                <Controller
                    control={control}
                    name="phone"
                    render={({ field: { onChange, value } }) => (
                    <>
                        <Input placeholder="Digite seu telefone" placeholderTextColor={"#fff"} value={value} onChangeText={onChange} />
                        {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                    </>
                    )}
                />

                <Label>Senha: <ObrigatoryText>*</ObrigatoryText></Label>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                    <>
                        <Input placeholder="Digite sua senha" secureTextEntry value={value} placeholderTextColor={"#fff"} onChangeText={onChange} />
                        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                    </>
                    )}
                />
                                
                <Label>Confirmar Senha: <ObrigatoryText>*</ObrigatoryText></Label>
                <Controller
                    control={control}
                    name="password_confirmation"
                    render={({ field: { onChange, value } }) => (
                    <>
                        <Input placeholder="Digite sua senha" secureTextEntry value={value} placeholderTextColor={"#fff"} onChangeText={onChange} />
                        {errors.password_confirmation && <ErrorText>{errors.password_confirmation.message}</ErrorText>}
                    </>
                    )}
                />
                </FormContainer>
                <Footer>
                    <ObrigatoryText>
                        * Campos Obrigatórios
                    </ObrigatoryText>
                    <SubmitButton onPress={handleSubmit(onSubmit)}>
                        <SubmitText>Enviar</SubmitText>
                    </SubmitButton>
                    <ExitButton onPress={handleGoBack}>
                        Cancelar
                    </ExitButton>
                </Footer>
            
        </Container>
    );
}

export default SingUp;