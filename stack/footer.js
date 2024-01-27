import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import About from '../screens/About';
import Home from '../screens/Home';
import Profile from '../screens/profile';
import { View, Text } from 'react-native'
import UpperHeader from '../screens/UpperHeader';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
       
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          header:() => (
            <UpperHeader/>
        ),
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="about"
        component={About}
        options={{
          tabBarLabel: 'about',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="square-o" color={color} size={size} />
          ),
        
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs