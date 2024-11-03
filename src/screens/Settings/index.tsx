import React from "react";
import { Container, CPFText, Divider, Header, NameText, OptionItem, OptionText, ProfileCard, ProfileImage, Separator, Title } from "./styles";
import { OptionsContainer } from "../Reports/styles";


const Settings = () => {

    const handleOptionClick = (option: string) => {
        console.log(`Ação para ${option}`);
    };
    return(
        <Container>
            <Header>
                <Title>Configurações</Title>
            </Header>
            <Separator />
            <ProfileCard>
                <ProfileImage source={{ uri: 'https://avatars.githubusercontent.com/u/53789619?v=4&size=100' }} />
                <NameText>Mateus Costa dos Santos</NameText>
                <CPFText>CPF: ***.999.***-**</CPFText>
            </ProfileCard>
            <OptionsContainer>
                <OptionItem onPress={() => handleOptionClick('Opção 1')}>
                    <OptionText>Dados da Conta</OptionText>
                </OptionItem>
                            
                <Divider />

                <OptionItem onPress={() => handleOptionClick('Opção 4')}>
                    <OptionText>Termos e Condições</OptionText>
                </OptionItem>
                
                <Divider />

                <OptionItem onPress={() => handleOptionClick('Opção 5')}>
                    <OptionText>Central de Ajuda</OptionText>
                </OptionItem>
                
                <Divider />

                <OptionItem onPress={() => handleOptionClick('Opção 6')}>
                    <OptionText highlighted>Sair da Conta</OptionText>
                </OptionItem>
            </OptionsContainer>
        </Container>
    )
}

export default Settings;