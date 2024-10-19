import React from "react";
import { Container, Input, Button, ButtonText, Label, ForgotPasswordText, LogoContainer, LogoText, LogoImage, SingUpText, Footer } from "./styles";
import { logoImage } from '../../assets/';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../context/AuthContext";


const SingIn = () => {
    const navigation = useNavigation<any>();
    
    const { login } = useAuth();

    const handleForgotPasswordPress = () => {
      navigation.navigate('AuthHome');
    };

    const handleSingUp = () => {
        navigation.navigate('SingUp');
    }

    const handleLogin = () => {
        navigation.navigate('AuthHome');
        login();
    }

    return(
        <Container>
            <LogoContainer>
                <LogoImage source={logoImage} />
            </LogoContainer>
            <Label>Email</Label>
            <Input
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={"#fff"}
                autoCorrect={false}
            />

            <Label>Senha</Label>
            <Input
                placeholder="Digite sua senha"
                placeholderTextColor={"#fff"}
                secureTextEntry
            />
            <ForgotPasswordText onPress={handleForgotPasswordPress}>
                Esqueceu a sua senha?
            </ForgotPasswordText>

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