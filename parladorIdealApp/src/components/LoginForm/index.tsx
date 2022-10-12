import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FooterLink, InputContainer, SignText } from './styles'
import { ButtonSubmit } from '../ButtonSubmit'
import { ControlledInput } from '../ControlledInput'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
type FormData = {
  email: string
  password: string
}
const schema = yup.object({
  email:yup.string().email("Email inválido").required("Informe seu email"),
  password: yup.string().min(8,"A senha deve possuir pelo menos 8 caracteres").required("Informe uma senha")
})
export function LoginForm() {
  const navigation = useNavigation()
  const handleSignIn = ()=>navigation.navigate('signUp')
  const { control, handleSubmit ,formState:{errors}} = useForm<FormData>({
    resolver:yupResolver(schema)
  })
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
        error={errors.email}
      />
      <ControlledInput
        name="password"
        control={control}
        icon="lock"
        placeholder="Insira sua senha"
        secureTextEntry
        error={errors.password}
      />
      <ButtonSubmit
        buttonText="Fazer login"
        onPress={handleSubmit(handleLogin)}
      />
      <FooterLink>
        <SignText>Não consegue logar?</SignText>
        <TouchableOpacity activeOpacity={0.7} onPress={handleSignIn}>
          <SignText>Cadastre-se</SignText>
        </TouchableOpacity>
      </FooterLink>
    </InputContainer>
  )
}
