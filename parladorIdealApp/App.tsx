import { StatusBar } from 'react-native'
import { Background } from './src/components/Background'
import { LoginPage } from './src/screens/LoginPage'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'
import { ThemeProvider } from 'styled-components/native'
import { defaultTheme } from './src/theme'
import { SignUpPage } from './src/screens/SignUpPage'
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  })
  return (
    <ThemeProvider theme={defaultTheme}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <SignUpPage /> : <Loading />}
      </Background>
    </ThemeProvider>
  )
}
