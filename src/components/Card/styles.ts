import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const CardContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 18px;
  background-color: #fff;
  border-radius: 5px;
  elevation: 3;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  margin-bottom: 16px;
`;

export const IconWrapper = styled.View`
  margin-right: 16px;
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #0A102D;
`;

export const CardSubTitle = styled.Text`
  font-size: 16px;
  color: #0A102D;
`;