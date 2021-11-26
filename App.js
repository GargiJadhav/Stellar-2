import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';


import Home from "./screens/Home";
import StarMap from "./screens/StarMap";
import DailyPic from "./screens/DailyPic";
import SpaceCraft from "./screens/SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
    
        {/* <Stack.Screen component="Home" name={HomeScreen} /> */}
        { <Stack.Screen name="Home" component={Home} /> }
        {/* <Stack.Screen name="Home" component="HomeScreen" /> */}
        {/* <Stack.Screen name:"Home" component:{HomeScreen} /> */}
    
        <Stack.Screen name="StarMap" component={StarMap} />
        <Stack.Screen name="DailyPic" component={DailyPic} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

