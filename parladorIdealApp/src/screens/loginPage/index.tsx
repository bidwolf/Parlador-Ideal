import React from 'react'
import { Heading } from '../../components/Heading'
import { Container } from './styles'
import { LoginForm } from '../../components/LoginForm'
import { Background } from '../../components/Background'
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import axios from 'axios'
const handleSign = () => console.log('Indo pra página de cadastro')
export function LoginPage() {

  return (
    <Background>
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <Heading iconName="log-in" title="Efetue seu login" />
            <LoginForm />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
    </Background>
  )
}
