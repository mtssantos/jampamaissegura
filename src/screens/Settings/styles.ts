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

export const ProfileCard = styled.View`
  align-items: center;
  padding: 16px;
  margin-top: 10px;
  border-radius: 8px;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 12px;
`;

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffff;
  margin-bottom: 4px;
`;

export const CPFText = styled.Text`
  font-size: 14px;
  color: #f6f6f6;
`;

export const OptionsMenu = styled.View`
  background-color: #fff;
  border-radius: 8px;
  margin: 16px;
`;

export const OptionItem = styled.TouchableOpacity`
  padding: 16px;
`;

export const OptionText = styled.Text<{ highlighted?: boolean }>`
  font-size: 15px;
  font-family: 'Poppins_600SemiBold';  
  color: ${({ highlighted }) => (highlighted ? '#fc030f' : '#fff')};
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #ffffff;
`;