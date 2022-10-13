import React, { useContext, useState } from 'react'
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
import { Alert, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback } from 'react-native'
import AuthContext from '../../contexts/AuthContext'
import { UserResponse } from '../Home'
import { createPost } from '../../services/createPost'
import { AxiosResponse } from 'axios'
import { defaultTheme } from '../../theme'
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
  const {user }= useContext(AuthContext)
  const userParsed :UserResponse= JSON.parse(JSON.stringify(user))
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const handleSubmitPost = async(data: FormData) => {
    
     await createPost(userParsed.user.id,data).then((response)=>{
      Alert.alert(response?.data.postContent?'Post Criado com sucesso!':'Erro interno','',[{text:'Ok',style:'default'}],{cancelable:true})
    }).catch(error=>error)
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
