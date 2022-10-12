import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { defaultTheme } from '../../theme'
import { Card } from '../Card'
import {
  Author,
  IconContainer,
  LikesCounter,
  PostContent,
  PostData,
} from './styles'

export function Post() {
  return (
    <Card>
      <Author>autor · Henrique de Paula Rodrigues</Author>
      <PostContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla
        quod possimus totam amet, optio non dignissimos modi aspernatur. Quam,
        quia similique? Dolore.
      </PostContent>
      <IconContainer>
        <PostData>2022-10-10T12:24:20.753Z</PostData>
        <Icon name="heart" size={16} color={defaultTheme.colors.alert} />
        <LikesCounter>2</LikesCounter>
      </IconContainer>
    </Card>
  )
}
