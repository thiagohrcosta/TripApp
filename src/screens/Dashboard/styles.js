import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
`;

export const MainTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};

  padding: 0 24px;
  font-size: 32px;
  font-weight: 900;
`;

export const DestinationContainer = styled.View`
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  margin-bottom: 20px;

  padding: 0 24px;
`;

export const Title = styled.Text`
  margin-right: 40px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TripImage = styled.View`
  padding: 0 24px;
  color: red;
`;

export const SectionsContainer = styled.View`
  margin-top: 20px;
  padding: 0 24px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100px;
`;

export const Icon = styled(Feather)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  height: 50px;
  width: 50px;

  margin-right: 10px;

  border-radius: 8px;

  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
