import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FooterLink, InputContainer, SignText } from './styles'
import { ButtonSubmit } from '../ButtonSubmit'
import { ControlledInput } from '../ControlledInput'
import { useForm } from 'react-hook-form'
type FormData = {
  email: string
  password: string
}
export function Form() {
  const { control, handleSubmit } = useForm<FormData>()
  const handleLogin = (data: FormData) => {
    console.log(data)
  }
  return (
    <InputContainer>
      <ControlledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="Insira seu email"
        keyboardType="email-address"
      />
      <ControlledInput
        name="password"
        control={control}
        icon="lock"
        placeholder="Insira sua senha"
        secureTextEntry
      />
      <ButtonSubmit
        buttonText="Fazer login"
        onPress={handleSubmit(handleLogin)}
      />
      <FooterLink>
        <SignText>Não consegue logar?</SignText>
        <TouchableOpacity activeOpacity={0.7}>
          <SignText>Clica ae</SignText>
        </TouchableOpacity>
      </FooterLink>
    </InputContainer>
  )
}
