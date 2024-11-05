import React, { useState } from "react";
import { Container, Input, Button, ButtonText, Label, ForgotPasswordText, LogoContainer, LogoText, LogoImage, SingUpText, Footer, ErrorText } from "./styles";
import { logoImage } from '../../assets/';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../context/AuthContext";
import { authLogin } from '../../services/api/authService';
import { Alert } from "react-native";


const SingIn = () => {
    const [cpf, setCPF] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation<any>();
    
    const { login } = useAuth();

    const handleForgotPasswordPress = () => {
      navigation.navigate('AuthHome');
    };

    const handleSingUp = () => {
        navigation.navigate('SingUp');
    }

    const handleLogin = async () => {
        const response = await authLogin({ cpf, password }); 
        if (response.success){
            navigation.navigate('AuthHome');
            login();
        } else {
            Alert.alert('Erro', 'Usuário ou senha inválidos.');
        }
    }

    return(
        <Container>
            <LogoContainer>
                <LogoImage source={logoImage} />
            </LogoContainer>

            <Label>CPF</Label>
            <Input
                placeholder="Digite seu CPF"
                value={cpf}
                onChangeText={setCPF}
                keyboardType="numeric"
                autoCapitalize="none"
                placeholderTextColor={"#fff"}
                autoCorrect={false}
            />

            <Label>Senha</Label>
            <Input
                placeholder="Digite sua senha"
                placeholderTextColor={"#fff"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
            <ForgotPasswordText onPress={handleForgotPasswordPress}>
                Esqueceu a sua senha?
            </ForgotPasswordText>

            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
            <Button onPress={handleLogin}>
                <ButtonText>Fazer Login</ButtonText>
            </Button>
            <Footer>
                <SingUpText onPress={handleSingUp}>
                    É novo por aqui? Cadastre-se 
                </SingUpText>
            </Footer>
        </Container>

    );
}

export default SingIn;