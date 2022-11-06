import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dashboard } from './src/screens/Dashboard';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Header } from './src/components/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <View>
        <Dashboard />
      </View>
    </ThemeProvider>

  );
}

