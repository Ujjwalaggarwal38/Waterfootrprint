import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './Screens/Signup';
import Signin from './Screens/Signin';
import Editprofile from './Screens/Editprofile';
import Dashboard from './Screens/Dashboard';
import Rewards from './Screens/Rewards';
import MainScreen from './Screens/MainScreen';
import Rewards2 from './Screens/Rewards2';
import Rewards3 from './Screens/Rewards3';
import Reward4 from './Screens/Reward4';
import Reward5 from './Screens/Reward5';
import Notifications from './Screens/Notifications';
import Chatbot from './Screens/Chatbot';
import Calculator from './Screens/Calculator';
// import HomeScreen from './screens/HomeScreen'; // Adjust the path according to your folder structure
// import FirstScreen from './screens/FirstScreen'; // Adjust the path according to your folder structure

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Main" component={MainScreen}  />
        <Stack.Screen name='Signup' component={SignUpScreen}/>
        <Stack.Screen name='Signin' component={Signin}/>
        <Stack.Screen name="Edit" component={Editprofile}  options={{
            headerShown: true,
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="Dash" component={Dashboard}/>
          <Stack.Screen name="Reward" component={Rewards}/>
          <Stack.Screen name="Reward2" component={Rewards2}/>
          <Stack.Screen name="Reward3" component={Rewards3}/>
          <Stack.Screen name="Reward4" component={Reward4}/>
          <Stack.Screen name="Reward5" component={Reward5}/>
          <Stack.Screen name="Notify" component={Notifications} options={{
            headerShown: true,
            title: 'Notifications',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="chat" component={Chatbot} options={{
            headerShown: true,
            title: 'Chatbot',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="calculator" component={Calculator} options={{
            headerShown: true,
            title: 'Calculator',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;