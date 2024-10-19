import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { Container } from "./styles";

interface DynamicIconProps {
    iconName: keyof typeof Icon;  
    size?: number;
    color?: string;
}

const IconWrapper: React.FC<DynamicIconProps> = ({ iconName, size = 32, color = '#000' }) => {
    const IconComponent = Icon[iconName] as React.ElementType;  

    if (!IconComponent) {
      return null;  
    }
    return(
       <Container>
        <IconComponent size={size} color={color} />
       </Container>
    );
};

export default IconWrapper;