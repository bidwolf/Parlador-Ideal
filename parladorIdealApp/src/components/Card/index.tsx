import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';
interface Props extends TouchableOpacityProps{
text?:string
children?:React.ReactNode
}
export const Card:React.FC<Props>=({children,...rest}:Props)=> {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}