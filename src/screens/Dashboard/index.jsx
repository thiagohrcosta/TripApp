import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Header } from '../../components/Header';
import {
  Container,
  MainTitle,
  DestinationContainer,
  Title,
  SubTitle,
  TripImage,
  SectionsContainer,
  IconsContainer,
  Icon
 } from './styles';

const TRIPS = [
  {
    id: 1,
    kind: 'City',
    country: 'USA',
    photo: 'https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'San Francisco'
  },
  {
    id: 1,
    kind: 'City',
    country: 'USA',
    photo: 'https://images.unsplash.com/photo-1582070915618-9140bdc5035e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    name: 'New York'
  },
  {
    id: 1,
    kind: 'City',
    country: 'USA',
    photo: 'https://images.unsplash.com/photo-1577626761609-b08fe35574a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    name: 'Miami'
  }
]
export function Dashboard() {
  const [selectedDestination, setSelectedDestination] = useState("Worldwide");
  const [userIsLookingFor, setUserIsLookingFor] = useState("Hotels");

  function handleSelectDestination(destination) {
    setSelectedDestination(destination);
  }

  function handleLookingFor(lookingFor) {
    setUserIsLookingFor(lookingFor);
  }

  return (
    <Container>
      <Header />
      <MainTitle>
        Find your next trip
      </MainTitle>
      <DestinationContainer>
        <Title
          onPress={() => handleSelectDestination('Worldwide')}
          value={selectedDestination}
          style={{
            borderBottomColor: selectedDestination === 'Worldwide' ? `#5636D3` : '#fff',
            borderBottomWidth: selectedDestination === 'Worldwide' ? 2 : 0
          }}
        >
          Worldwide
        </Title>
        <Title
          onPress={() => handleSelectDestination('USA')}
          value={selectedDestination}
          style={{
            borderBottomColor: selectedDestination === 'USA' ? `#5636D3` : '#fff',
            borderBottomWidth: selectedDestination === 'USA' ? 2 : 0
          }}
        >
          USA
        </Title>
        <Title
          onPress={() => handleSelectDestination('Europe')}
          value={selectedDestination}
          style={{
            borderBottomColor: selectedDestination === 'Europe' ? `#5636D3` : '#fff',
            borderBottomWidth: selectedDestination === 'Europe' ? 2 : 0
          }}
        >
          Europe
        </Title>
      </DestinationContainer>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
      {
        TRIPS.map((trip) => {
          return (
            <TripImage>
              <Image
                key={trip.id}
                source={{ uri: trip.photo }}
                style={{
                  width: 200,
                  height: 320,
                  borderRadius: 10,

                }}
              />
            </TripImage>
          )
        })
      }
      </ScrollView>
      <SectionsContainer>
        <SubTitle>I´m looking for... {userIsLookingFor}</SubTitle>
        <IconsContainer>
          <Icon name="home"
            onPress={() => handleLookingFor('Hotels')}
            style={{
              backgroundColor: userIsLookingFor === 'Hotels' ? '#5636D3' : '#ffffff',
              color: userIsLookingFor === 'Hotels' ? '#fff' : '#5636D3'
            }}
          />
          <Icon name="coffee"
            onPress={() => handleLookingFor('Breakfast')}
            style={{
              backgroundColor: userIsLookingFor === 'Breakfast' ? '#5636D3' : '#ffffff',
              color: userIsLookingFor === 'Breakfast' ? '#fff' : '#5636D3'
            }}
          />
          <Icon name="sun"
            value={userIsLookingFor}
            onPress={() => handleLookingFor('Daylife')}
            style={{
              backgroundColor: userIsLookingFor === 'Daylife' ? '#5636D3' : '#ffffff',
              color: userIsLookingFor === 'Daylife' ? '#fff' : '#5636D3'
            }}
          />
          <Icon name="moon"
            value={userIsLookingFor}
            onPress={() => handleLookingFor('Nightlife')}
            style={{
              backgroundColor: userIsLookingFor === 'Nightlife' ? '#5636D3' : '#ffffff',
              color: userIsLookingFor === 'Nightlife' ? '#fff' : '#5636D3'
            }}
          />
        </IconsContainer>

      </SectionsContainer>

    </Container>
  );
}
