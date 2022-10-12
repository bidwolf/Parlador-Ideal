import React from 'react'
import { InputContainer } from '../LoginForm/styles'
import { ButtonSubmit } from '../ButtonSubmit'
import { ControlledInput } from '../ControlledInput'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
type FormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}
const schema = yup.object({
  name:yup.string().min(2,"Muito curto").max(30,"Muito longo").required("Insira um nome"),
  email:yup.string().email("Email inválido").required("Informe seu email"),
  password: yup.string().min(8,"A senha deve possuir pelo menos 8 caracteres").required("Informe uma senha"),
  password_confirmation:yup.string().oneOf([yup.ref('password'),null],'A senha de confirmação não corresponde')
})
export function SignUpForm() {
  const { control, handleSubmit ,formState:{errors}} = useForm<FormData>({
    resolver:yupResolver(schema)
  })
  const handleLogin = (data: FormData) => {
    console.log(data)
  }
  return (
    <InputContainer>
      <ControlledInput
        name="name"
        control={control}
        icon="user"
        placeholder="Insira seu nome"
        keyboardType="name-phone-pad"
        error={errors.name}
      />
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
      <ControlledInput
        name="password_confirmation"
        control={control}
        icon="lock"
        placeholder="Confirme sua senha"
        secureTextEntry
        error={errors.password_confirmation}
      />
      <ButtonSubmit
        buttonText="Cadastrar"
        onPress={handleSubmit(handleLogin)}
      />
    </InputContainer>
  )
}
