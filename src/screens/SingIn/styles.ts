import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 25px 25px 25px;
  background-color: #0A102D;
`;


export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoText = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 29px;
  margin-left: 0px;
  color: #333;
`;

export const LogoImage = styled.Image`
  width: 250px;
  height: 250px;
  resize-mode: contain;
`;

export const Label = styled.Text`
  width: 100%;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  font-size: 15px;
  background-color: #0A102D;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: underline;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #0A102D;
  font-size: 16px;
  font-weight: bold;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end; 
  background-color: #0A102D;
`;

export const SingUpText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-decoration: underline;
`;

export const ErrorText = styled.Text`
  color: #E82C2C;
  font-size: 16px;
  text-align: center;
`;