import React, { useState } from 'react'
import { Background } from '../../components/Background'
import { ButtonSubmit } from '../../components/ButtonSubmit'
import { ControlledInput } from '../../components/ControlledInput'
import { Heading } from '../../components/Heading'
import {
  ButtonSubmitContainer,
  InputContainer,
} from '../../components/LoginForm/styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback } from 'react-native'
type FormData = {
  postContent: string
}
const schema = yup.object({
  postContent: yup
    .string()
    .min(1, 'Conteúdo da postagem deve ter pelo menos 1 caractere.')
    .max(280, 'Seu post não pode possuir mais do que 280 caracteres')
    .required('Insira um conteúdo para sua publicação'),
})
export function CreatePostPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const handleSubmitPost = (data: FormData) => {
    console.log(data)
  }
  
  return (
    <Background>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <Heading iconName="file-text" title="Criar publicação" />
            <InputContainer>
              <ControlledInput
                icon="file"
                name="postContent"
                control={control}
                placeholder="Faça sua publicação"
                multiline
                numberOfLines={10}
                maxLength={280}
                error={errors.postContent}
                textAlign={'center'}
              />
              <ButtonSubmitContainer>
                <ButtonSubmit
                  buttonText="Criar post"
                  onPress={handleSubmit(handleSubmitPost)}
                />
              </ButtonSubmitContainer>
            </InputContainer>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </Background>
  )
}
