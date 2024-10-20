import React from "react";
import IconComponent from 'react-native-vector-icons/Ionicons';
import { Container } from "./styles";

interface DynamicIconProps {
    iconName: any;  
    size?: number;
    color?: string;
}

const IconWrapper: React.FC<DynamicIconProps> = ({ iconName, size = 60, color = '#000' }) => {
    if (!IconComponent) {
      return null;  
    }
    return(
       <Container>
        <IconComponent name={iconName} size={size} color={color} />
       </Container>
    );
};

export default IconWrapper;