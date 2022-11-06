import React from 'react';
import { ScrollView } from 'react-native';
import { LookingForItem } from '../LookingForItem';
import { Container } from './styles';

const ITEM = [
  {
    id: 1,
    kind: 'City',
    country: 'USA',
    service: 'breakfast',
    photo: 'https://images.unsplash.com/photo-1579867779026-d8285a8c9625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 2,
    kind: 'City',
    country: 'USA',
    service: 'breakfast',
    photo: 'https://images.unsplash.com/photo-1528699633788-424224dc89b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80'
  },
  {
    id: 3,
    kind: 'City',
    country: 'USA',
    service: 'breakfast',
    photo: 'https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=504&q=80'
  }
]
export function LookingFor({
  userIsLookingFor
}) {
  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          ITEM.map((item) => {
            return (
              <LookingForItem
                key={item.id}
                kind={item.kind}
                country={item.country}
                service={item.service}
                photo={item.photo}
              />
            )
          })
        }
      </ScrollView>
    </Container>
  );
}
