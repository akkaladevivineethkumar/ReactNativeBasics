import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import UpperHeader from './screens/UpperHeader';
import MyTabs from './stack/footer';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='footer' 
         screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        >
          <Stack.Screen options={{headerShown: false}} name="footer" component={MyTabs}  /> 
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    )
    }
export default App