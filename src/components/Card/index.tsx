import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { CardContainer, CardSubTitle, CardTitle, IconWrapper, TextContainer } from "./styles";



const Card = ({ iconName, title, subtitle, onPress }) => {
    return (
      <CardContainer onPress={onPress}>
        <IconWrapper>
          <Icon name={iconName} size={40} color="#0A102D" />
        </IconWrapper>
        <TextContainer>
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>{subtitle}</CardSubTitle>
        </TextContainer>
      </CardContainer>
    );
};

export default Card;
  