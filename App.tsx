import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomAppBar from './components/CustomAppBar';

//stack navigatorin luonti
const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      {/* sovelluksen navigaatio */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            //oma komponentti sovelluksen yläreunan navigointipalkiksi  
            header: (props) => <CustomAppBar {...props} />,
          }}
        >
          {/*eka näyttö aloitusnäyttö */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}