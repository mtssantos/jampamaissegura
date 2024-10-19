import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

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

export const NotificationIcon = styled(MaterialIcons)`
  padding: 5px;
`;

export const FormContainer = styled.View`
  padding: 10px;
`;

export const Input = styled.TextInput`
  border: 1px solid #fff;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 13px;
  border-radius: 5px;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'Poppins_400Regular';  
  font-size: 16px;
  color: #fff;
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #fff;
  padding: 16px;
  margin-top: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SubmitText = styled.Text`
  color: #0A102D;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  font-family: 'Poppins_700Bold';  
`;