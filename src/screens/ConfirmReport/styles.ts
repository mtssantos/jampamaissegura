import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 15px 0px 15px;
  background-color: #0A102D;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_600SemiBold';  
  color: #fff;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ConfirmSucess = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_600SemiBold';  
  color: #fff;
  text-align: center;
`;

export const ConfirmInfo = styled.Text`
  font-size: 15px;
  font-family: 'Poppins_500Medium';  
  color: #fff;
  text-align: center;
`;

export const TextToHome = styled.Text`
  text-decoration: underline;
  color: #fff;
  text-align: center;
  font-size: 15px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end; 
  margin-bottom: 20px;
  background-color: #0A102D;
`;
