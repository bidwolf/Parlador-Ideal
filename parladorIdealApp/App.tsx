import { StatusBar } from 'react-native'
import { Background } from './src/components/Background'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'
import { ThemeProvider } from 'styled-components/native'
import { defaultTheme } from './src/theme'
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/contexts/AuthContext'
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  })
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <Background>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            {fontsLoaded ? <Routes /> : <Loading />}
          </Background>
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
