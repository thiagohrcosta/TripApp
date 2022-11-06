import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';

export function LookingForItem({
  id,
  kind,
  country,
  service,
  photo
}) {
  return (
    <Container>
      <Image
        source={{ uri: photo }}
        style={{
          width: 200,
          height: 120,
          borderRadius: 10,
        }}
      />
    </Container>
  );
}
