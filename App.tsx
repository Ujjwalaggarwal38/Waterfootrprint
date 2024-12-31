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
import Profile from './Screens/Profile';
import LeaderBoard from './Screens/LeaderBoard';
import ForgotPassword from './Screens/Forgotpass';
import OTPVerificationScreen from './Screens/Otp';
import NewPassword from './Screens/Newpass';
import EducationalScreen from './Screens/EducationalScreen';
import BooksScreen from './Screens/Books';
import VideoScreen from './Screens/Video';
import CaseStudyScreen from './Screens/CaseStudy';
import ChangePassword from './Screens/ChangePassword';
import i18n from './Screens/transalation/translation'
import { I18nextProvider } from 'react-i18next';
import Community from './Screens/Community';
import CommunityScreen from './Screens/Community';
import CameraScreen from './Screens/Camera';
import Users from './Screens/Users';
import Farmersdash from './Screens/Farmersdash';
import FarmersCalculator from './Screens/FarmersCalculator';
import FarmerCalculatorScreen from './Screens/FarmerCalculatorScreen';
import FarmersCalculatorScreen from './Screens/FarmerCalculatorScreen';
import FarmerCropPrdiction from './Screens/FarmerCropPrdiction';
import TodaysTasks from './Screens/TodayTask';
import { TaskProvider } from './Screens/TaskContext';
import Farmerssinin from './Screens/Farmerssinin';
import Farmerssinup from './Screens/Farmerssinup';
import FarmersOtp from './Screens/FarmersOtp';
import FarmersTips from './Screens/FarmerTips';
import FarmerFootprintcalc from './Screens/FarmerFootprintcalc';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TaskProvider>
    <I18nextProvider i18n={i18n}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Main" component={MainScreen}  />
        <Stack.Screen name='Signup' component={SignUpScreen}/>
        <Stack.Screen name='SigninFarmer' component={Farmerssinin}/>
        <Stack.Screen name='SignupFarmer' component={Farmerssinup}/>
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
          <Stack.Screen name="User" component={Users}/>
          <Stack.Screen name="Farmers" component={Farmersdash}
          options={{
            headerShown: true,
            title: 'Farmers Dashboard',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
          />
          <Stack.Screen name="Task" component={TodaysTasks} options={{
            headerShown: true,
            title: 'Todays Tasks',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>

          <Stack.Screen name="Farmerscal" component={FarmersCalculator} options={{
            headerShown: true,
            title: 'Farmer Calculator',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="FarmerscalScr" component={FarmerCalculatorScreen} options={{
            headerShown: true,
            title: 'Water Footprint Calculation',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
            <Stack.Screen name="FarmerCrop" component={FarmerCropPrdiction} options={{
            headerShown: true,
            title: 'Crop Prediction',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>


          <Stack.Screen name="Reward" component={Rewards}/>
          <Stack.Screen name="Camerae" component={CameraScreen}/>
          <Stack.Screen name="Reward2" component={Rewards2}/>
          <Stack.Screen name="Reward3" component={Rewards3}/>
          <Stack.Screen name="Reward4" component={Reward4}/>
          <Stack.Screen name="Reward5" component={Reward5}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="EditProfile" component={Editprofile} options={{
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
          <Stack.Screen name="Education" component={EducationalScreen}  options={{
            headerShown: true,
            title: 'Educational Content',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="Book" component={BooksScreen}  options={{
            headerShown: true,
            title: 'Books',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="Video" component={VideoScreen}  options={{
            headerShown: true,
            title: 'Videos',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="Case" component={CaseStudyScreen}  options={{
            headerShown: true,
            title: 'Case Studies',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="Leader" component={LeaderBoard}  options={{
            headerShown: true,
            title: 'Leaderboard',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
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
          <Stack.Screen name="Forgot" component={ForgotPassword} options={{
            headerShown: true,
            title: 'Reset Password',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
           <Stack.Screen name="Otp" component={OTPVerificationScreen} options={{
            headerShown: true,
            title: 'OTP',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="Farmerot" component={FarmersOtp} options={{
            headerShown: true,
            title: 'OTP',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="NewPass" component={NewPassword} options={{
            headerShown: true,
            title: 'New Password',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
            <Stack.Screen name="ChangePass" component={ChangePassword} options={{
            headerShown: true,
            title: 'Change Password',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          <Stack.Screen name="Commute" component={Community} options={{
            headerShown: true,
            title: 'Community',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/>
          
          <Stack.Screen name="Hello" component={FarmersTips} options={{
            headerShown: true,
            title: 'Tips For Farmers',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}/> 
          <Stack.Screen name="Farmerfoot" component={FarmerFootprintcalc} options={{
            headerShown: true,
            title: 'Footprint Calculator',
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
    </I18nextProvider>
    </TaskProvider>
  );
};

export default App;