import React, { useContext, useEffect, useState } from 'react'
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
import { useNavigation } from '@react-navigation/native'
import { ButtonSubmit as NewPostButton } from '../../components/ButtonSubmit'
import AuthContext from '../../contexts/AuthContext'
import { getPostsById } from '../../services/getPostsById'
type UserResponse = {
  token?: string
  user: {
    id: string
    userName: string
    userEmail: string
  }
}
export function Home() {
  const [posts, setPosts] = useState<{ posts: PostApiProps[] }>()
  const { user } = useContext(AuthContext)
  const userParsed: UserResponse = JSON.parse(JSON.stringify(user))
  useEffect(() => {
    getPostsById(userParsed.user.id).then((response) => {
      setPosts(response.data)
    })
  }, [])
  const navigation = useNavigation()
  const handleCreatePost = () => navigation.navigate('createPost')
  const handleFeed = () => navigation.navigate('feed')
  return (
    <Background>
      <Container>
        <ScrollView decelerationRate={0.5} showsVerticalScrollIndicator={false}>
          <Heading
            iconName="home"
            title={`Bem vindo ${userParsed.user.userName}`}
          />
          <ProfileStatusContainer>
            <Contact>{userParsed.user.userEmail}</Contact>
            <Publications>Suas Publicações</Publications>
          </ProfileStatusContainer>

          <FlatList
            data={posts?.posts}
            keyExtractor={(item) => item.postId}
            renderItem={({ item }) => <Post data={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <ButtonContainer>
            <NewPostButton
              buttonText="Nova Publicação"
              onPress={handleCreatePost}
            ></NewPostButton>
          </ButtonContainer>
          <Publications>Sua rede de Contatos</Publications>

          <ButtonContainer>
            <NewPostButton
              buttonText="Ver todas as publicações"
              onPress={handleFeed}
            ></NewPostButton>
          </ButtonContainer>
        </ScrollView>
      </Container>
    </Background>
  )
}
