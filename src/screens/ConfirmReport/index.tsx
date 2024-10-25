import React from "react";
import { ConfirmInfo, ConfirmSucess, Container, Content, Footer, Header, Separator, TextToHome, Title } from "./styles";
import IconWrapper from "../../components/IconWrapper";
import { useNavigation } from "@react-navigation/native";

const ConfirmReport = () => {
    const navigation = useNavigation<any>();

    function handleToHome(){
        navigation.navigate("Home");
    }
    return(
        <Container>
            <Header>
            </Header>
            <Separator />
            <Content>
                <IconWrapper iconName="checkmark-outline" size={150} color="#fff" />
                <ConfirmSucess>Ocorrência Registrada com sucesso!</ConfirmSucess>
                <ConfirmInfo>Acompanhe o seu telefone para receber a confirmação da ocorrência e caso possa informar mais detalhes.</ConfirmInfo>
            </Content>
            <Footer>
                <TextToHome onPress={handleToHome}>Voltar para tela Home</TextToHome>
            </Footer>
        </Container>
    );
}

export default ConfirmReport;