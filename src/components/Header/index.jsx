import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Icon,
  UserProfile,
  UserData,
  UserName,
  Email
 } from './styles';


export function Header() {
  return (
    <Container>
      <Icon name="menu" />
      <UserProfile>
        <UserData>
          <UserName>Hi Thiago! </UserName>
          <Email>email@email.com</Email>
        </UserData>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/28869405?v=4' }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      </UserProfile>

    </Container>
  );
}
