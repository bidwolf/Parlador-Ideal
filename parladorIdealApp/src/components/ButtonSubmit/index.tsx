import React from 'react';

import {ButtonSubmitContainer,Container, TextButton } from './styles';
interface Props {
buttonText:string,

}
export const ButtonSubmit:React.FC<Props> =({buttonText}:Props)=> {
  const handleLogin = ()=>console.log('teste')
  return (
    <Container>

      <ButtonSubmitContainer
        onPress = {handleLogin}
      >
          <TextButton>{buttonText}</TextButton>

      </ButtonSubmitContainer>
    </Container>
        
  );
}