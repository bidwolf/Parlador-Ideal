import React from 'react'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { Post, PostApiProps } from '../../components/Post'
import {
  ButtonContainer,
  Contact,
  Container,
  ProfileStatusContainer,
  Publications,
} from './styles'
import { FlatList, ScrollView } from 'react-native'
import { ButtonSubmit as NewPostButton } from '../../components/ButtonSubmit'
const data: PostApiProps[] = [
  {
    autor: 'Henrique',
    createdAt: '2018',
    initialLikes: 0,
    postContent: 'askdaisdqwdqjwd',
    postId: '1',
  },
  {
    autor: 'Henrique',
    createdAt: '2018',
    initialLikes: 0,
    postContent: 'askdaisdqwdqjwd',
    postId: '2',
  },
  {
    autor: 'Henrique',
    createdAt: '2018',
    initialLikes: 0,
    postContent: 'askdaisdqwdqjwd',
    postId: '3',
  },
  {
    autor: 'Henrique',
    createdAt: '2018',
    initialLikes: 0,
    postContent:
      'ihsdfhsdfhuodwshufhsuoihsdfhsdfhuodihsdfhsdfhuodwsihsdfhsdfhuodwshufhsuoihsdfhsdfhuodihsdfhsdfhuodwshufhsuowshufhsuoihsdfhsdfhuodwshufhsuoihsdfhsdfhuodwshufhsuoihsdfhsdfhuodwshufhsuohufhsuowshufhsuoihsdfhsdfhuodwshufhsuoihsdfhsdfhuodwshufhsuoihsdfhsdfhuodwshufhsuo',
    postId: '4',
  },
  {
    autor: 'Henrique',
    createdAt: '2018',
    initialLikes: 0,
    postContent: 'lorem',
    postId: '5',
  },
]
export function Home() {
  return (
    <Background>
      <Container>
        <ScrollView decelerationRate={0.5} showsVerticalScrollIndicator={false}>
          <Heading iconName="home" title="Bem vindo Henrique!" />
          <ProfileStatusContainer>
            <Contact>Email: Henrique@gmail.com</Contact>
            <Publications>Suas Publicações</Publications>
          </ProfileStatusContainer>

          <FlatList
            data={data}
            keyExtractor={(item) => item.postId}
            renderItem={({ item }) => <Post data={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <ButtonContainer>
            <NewPostButton buttonText="Nova Publicação"></NewPostButton>
          </ButtonContainer>
          <Publications>Sua rede de Contatos</Publications>
          <FlatList
            data={data}
            keyExtractor={(item) => item.postId}
            renderItem={({ item }) => <Post data={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </Container>
    </Background>
  )
}
