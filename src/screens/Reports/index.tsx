import React from "react";
import { Container, Header, OptionsContainer, Separator, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Card from "../../components/Card";


const Reports = () => {
    const navigation = useNavigation();
    
    return(
        <Container>
            <Header>
                <Title>Ocorrências</Title>
            </Header>
            <Separator />
            <OptionsContainer>
                <Card 
                    iconName="create-outline" 
                    title="Registrar Ocorrências" 
                    subtitle="Registre uma nova ocorrência! Todas as informações registradas serão anônimas." 
                    onPress={() => navigation.navigate('NewReport')}
                />
                <Card 
                    iconName="information-circle-outline" 
                    title="Acompanhar Ocorrências" 
                    subtitle="Acompanhe as ocorrências já registradas e seu status atual." 
                    onPress={() => navigation.navigate('NewReport')}
                />
            </OptionsContainer>
        </Container>
    )
}

export default Reports;