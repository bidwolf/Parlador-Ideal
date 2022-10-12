import React from 'react'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { Post ,PostApiProps} from '../../components/Post'
import { Container} from './styles'
import { FlatList } from 'react-native'
const data :PostApiProps[] =[
  {autor:'Henrique',createdAt:'2018',initialLikes:0,postContent:'askdaisdqwdqjwd',postId:'1'},
  {autor:'Henrique',createdAt:'2018',initialLikes:0,postContent:'askdaisdqwdqjwd',postId:'2'},
  {autor:'Henrique',createdAt:'2018',initialLikes:0,postContent:'askdaisdqwdqjwd',postId:'3'},
  {autor:'Henrique',createdAt:'2018',initialLikes:0,postContent:'askdaisdqwdqjwd',postId:'4'},
  {autor:'Henrique',createdAt:'2018',initialLikes:0,postContent:'askdaisdqwdqjwd',postId:'5'},
]
export function Home() {
  return (
    <Background>
      <Container>
        <Heading iconName="home" title="Bem vindo!" />
        <FlatList
          data={data}
          keyExtractor={item=>item.postId}
          renderItem={({item})=>(
            <Post data ={item}/>
          )}
        />
       
      </Container>
    </Background>
  )
}
