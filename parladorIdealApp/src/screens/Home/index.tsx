import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { Post } from '../../components/Post'
import { Container} from './styles'

export function Home() {
  return (
    <Background>
      <Container>
        <Heading iconName="home" title="Bem vindo!" />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </Container>
    </Background>
  )
}
