import React from 'react'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { SignUpForm } from '../../components/SignUpForm'
import { Container } from './styles'
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'

export function SignUpPage() {
  return (
    <Background>
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            
            <Heading iconName='user'title="Efetue seu Cadastro" />
            <SignUpForm />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
    </Background>
  )
}
