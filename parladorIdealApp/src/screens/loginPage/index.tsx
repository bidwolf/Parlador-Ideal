import React from 'react'
import { Heading } from '../../components/Heading'
import {
  Container,
  styles,
} from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { defaultTheme } from '../../theme'
import { Form } from '../../components/Form'
const handleSign = () => console.log('Indo pra página de cadastro')
export function LoginPage() {
  return (
    <Container>
      <Icon
        name="user"
        size={64}
        color={defaultTheme.colors.blue300}
        style={styles.icon}
      />
      <Heading title="Efetue seu login" />
      <Form/>
    </Container>
  )
}
