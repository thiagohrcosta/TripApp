import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  margin: 30px 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const UserProfile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserData = styled.View`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: flex-end;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const Email = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`;
