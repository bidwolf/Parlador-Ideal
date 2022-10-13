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
import { FlatList, RefreshControl, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  ButtonSubmit,
  ButtonSubmit as NewPostButton,
} from '../../components/ButtonSubmit'
import AuthContext from '../../contexts/AuthContext'
import { getPostsById } from '../../services/getPostsById'
export type UserResponse = {
  token?: string
  user: {
    id: string
    userName: string
    userEmail: string
  }
}
const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
export function Home() {
  const [posts, setPosts] = useState<{ posts: PostApiProps[] }>()
  const { user, logout } = useContext(AuthContext)
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])
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
        <ScrollView
          decelerationRate={0.5}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Heading
            iconName="home"
            title={`Bem vindo ${userParsed.user.userName}`}
          />
          <ProfileStatusContainer>
            <Contact> Email : {userParsed.user.userEmail}</Contact>
            <ButtonContainer>
              <ButtonSubmit
                buttonText="Logout"
                onPress={() => {
                  logout()
                }}
              />
            </ButtonContainer>
            <Publications>Suas Publicações</Publications>
          </ProfileStatusContainer>

          <FlatList
            data={posts?.posts}
            keyExtractor={(item) => item.postId}
            renderItem={({ item }) => <Post data={item} key={item.postId} />}
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
