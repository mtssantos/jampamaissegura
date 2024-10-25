import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

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

export const FormContainer = styled.ScrollView`
    flex: 1;
    padding-top: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  color: #fff;
`;

export const Select = styled(Picker)`
  height: 50px;
  margin-bottom: 10px;
  color: #fff;
`;

export const TextArea = styled.TextInput`
  height: 100px;
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  margin-bottom: 16px;
  text-align-vertical: top;
`;

export const Input = styled.TextInput`
  border: 1px solid #fff;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 13px;
  border-radius: 5px;
  color: #fff;
`;

export const DateButton = styled.TouchableOpacity`
  height: 50px;
  width: 50%;
  padding: 10px;
  background-color: #0A102D;
  border-radius: 5px;
  justify-content: center;
  margin-bottom: 15px;
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
`;

export const TimeButton = styled.TouchableOpacity`
  flex: 0.48;
  height: 50px;
  width: 50%;
  padding: 10px;
  background-color: #0A102D;
  border-radius: 5px;
  justify-content: center;
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 15px;
`;

export const DateTimePickerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const DatePickerContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TimePickerContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;


export const MapContainer = styled.View`
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #666;
`;

export const CheckBoxContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const CheckBoxLabel = styled.Text`
    color: #fff;
    margin-left: 10px;
`;

export const CustomCheckbox = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border-width: 2px;
  border-color: #007bff;
  align-items: center;
  justify-content: center;
`;

export const CheckboxText = styled.Text`
  font-size: 20px;
  color: #007bff;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 45px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const TextSubmit = styled.Text`
    color: #0A102D;
    font-size: 16px;
    font-weight: bold;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
