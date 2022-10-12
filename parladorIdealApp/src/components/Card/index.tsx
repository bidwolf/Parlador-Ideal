import React from 'react';
import { Container } from './styles';
interface Props{
text?:string
children?:React.ReactNode
}
export const Card:React.FC<Props>=({children,...rest}:Props)=> {
  return (
    <Container>
      {children}
    </Container>
  );
}