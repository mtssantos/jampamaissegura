import React from "react";
import { Container, Header, Separator, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";


const Settings = () => {
    return(
        <Container>
            <Header>
                <Title>Configurações</Title>
            </Header>
            <Separator />
        </Container>
    )
}

export default Settings;