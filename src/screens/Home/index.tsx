import React from "react";
import { Container, Content, DashboardInfo, Header, InfoBox, MainBox, Separator, SideBox, SideBoxContainer, Title, TitleBox } from "./styles";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
    const navigation = useNavigation<any>();

    return(
        <Container>
            <Header>
                <Title>Bem vindo de volta</Title>
            </Header>
            <Separator />
            <Content>
                <DashboardInfo>
                    <MainBox>
                        <TitleBox>Ocorrências Registradas</TitleBox>
                        <InfoBox top={50}>6</InfoBox>
                    </MainBox>
                    <SideBoxContainer>
                        <SideBox>
                            <TitleBox>Ocorrências Atendidas</TitleBox>
                            <InfoBox>4</InfoBox>
                        </SideBox>
                        <SideBox>
                            <TitleBox>Ocorrências em Análise</TitleBox>
                            <InfoBox>2</InfoBox>
                        </SideBox>
                    </SideBoxContainer>
                </DashboardInfo>
            </Content>
        </Container>
    )
}

export default Home;