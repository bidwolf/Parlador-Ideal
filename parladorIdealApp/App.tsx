import { StatusBar } from 'react-native'
import { Background } from './components/background'
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
export default function App() {
  const [fontsLoaded]=useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  })
  return (
  <Background>
    <StatusBar
    barStyle='light-content'
    backgroundColor='transparent'
    translucent
    ></StatusBar>
  </Background>)
}
