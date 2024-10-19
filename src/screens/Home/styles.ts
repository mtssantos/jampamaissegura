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
`;

export const DashboardInfo = styled.View`
  padding: 10px 10px 10px 5px;
  flex-direction: row;
`;

export const MainBox = styled.View`
  width: 170px;
  height: 200px;
  background-color: #fff;
  border-radius: 4px;
  padding: 5px 0px 0px 10px;
`;

export const SideBoxContainer = styled.View`
  flex-direction: column;  
  align-items: flex-start;
  justify-Content: space-between;
  margin-left: 15px;
`;

export const SideBox = styled.View`
  width: 170px;
  height: 95px;
  background-color: #fff;
  border-radius: 4px;
  padding: 5px 0px 0px 10px;
`;


export const TitleBox = styled.Text`
  color: #0A102D;
  font-size: 16px;
  font-family: 'Poppins_600SemiBold'; 
`;

export const InfoBox = styled.Text<any>`
  color: #0A102D;
  font-size: 30px;
  font-family: 'Poppins_600SemiBold'; 
  text-align: right;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: ${({ top }) => top}px;
  margin-bottom: 24px;
  margin-right: 16px; 
`;
