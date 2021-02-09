import "react-native-gesture-handler";


import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Welcom from './Pages/Welcom'
import Donor from './Pages/Donor'

const Stack = createStackNavigator();


const navigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcom">
         
          <Stack.Screen
            name="Welcom"
            component={Welcom}
           
            options={{
                title: "BloodBank", 
                headerStyle: {
                  backgroundColor: "#307ecc", 
                },
                headerTintColor: "#fff", 
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
          />
      
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title: "Login", 
                headerStyle: {
                  backgroundColor: "#307ecc", 
                },
                headerTintColor: "#fff", 
                headerTitleStyle: {
                  fontWeight: "bold", 
                },
              }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              title: "Registration", 
              headerStyle: {
                backgroundColor: "#307ecc", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />
           <Stack.Screen
            name="Donor"
            component={Donor}
            options={{
              title: "BloodBank", 
              headerStyle: {
                backgroundColor:"#307ecc", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default navigator;