import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { Background } from '../../components/Background'
import { Contact } from '../Home/styles'
import { ButtonContainer, Container, ProfileStatusContainer, Publications } from './styles'
import { ButtonSubmit as NewPostButton } from '../../components/ButtonSubmit'
import { Post, PostApiProps } from '../../components/Post'
import { useNavigation } from '@react-navigation/native'
import { getPosts } from '../../services/getPosts'
export function Feed() {
  const [posts, setPosts] = useState<{ posts: PostApiProps[] }>()
  const navigation = useNavigation()
  const handleCreatePost = () => navigation.navigate('createPost')
  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data)
    })
  }, [])
  return (
    <Background>
      <Container>
        <ScrollView decelerationRate={0.5} showsVerticalScrollIndicator={false}>
          
          <ProfileStatusContainer>
            <Publications>Em alta essa semana</Publications>
          </ProfileStatusContainer>

          <FlatList
            data={posts?.posts}
            keyExtractor={(item) => item.postId}
            renderItem={({ item }) => <Post data={item} key={item.postId}/>}
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

        </ScrollView>
      </Container>
    </Background>
  )
}
