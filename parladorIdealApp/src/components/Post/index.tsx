import { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { defaultTheme } from '../../theme'
import { Card } from '../Card'
import {
  Author,
  IconContainer,
  LikesCounter,
  PostContainer,
  PostContent,
  PostData,
} from './styles'
export interface PostProps {
  autor: string
  postContent: string
  initialLikes: number
  createdAt: Date | string
}
export interface PostApiProps extends PostProps {
  postId: string
}
interface Props {
  data: PostProps
}
let lastPress = 0
export function Post({ data, ...rest }: Props) {
  const onDoublePress = () => {
    const time = new Date().getTime()
    const delta = time - lastPress

    const DOUBLE_PRESS_DELAY = 400
    // Success double press
    lastPress = time
    return delta < DOUBLE_PRESS_DELAY
  }
  const handleCountLikes = () => {
    if (onDoublePress()) {
      setLikes(data.initialLikes + 1)
    }
  }
  const [likes, setLikes] = useState(data.initialLikes)
  return (
    <Card activeOpacity={0.7} onPress={handleCountLikes}>
      <Author>Autor · {data.autor}</Author>
      <PostContainer>
        <PostContent>{data.postContent}</PostContent>
      </PostContainer>
      <IconContainer>
        <PostData>{data.createdAt}</PostData>
        <Icon name="heart" size={16} color={defaultTheme.colors.alert} />
        <LikesCounter>{likes || 0}</LikesCounter>
      </IconContainer>
    </Card>
  )
}
