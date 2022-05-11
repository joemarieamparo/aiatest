import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from '../../landingscreen'
import ProfileScreen from '../../profilescreen'
import R from '../../../assets'
import ArticlesScreen from '../../articlesscreen'
import ArticleScreen from '../../articlescreen'

class AppStackContainer extends Component{
  render(){
      return(
          <AppContainer />
      )
  }
}

const Stack = createStackNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: R.colors.white
          },
          headerTintColor: R.colors.black,
          headerTitleStyle :{
            fontWeight: 'bold',
            color: R.colors.black
          }, 
          headerBackTitle: '',
          headerShown: true
        }}
      >
        <Stack.Screen 
          name="LandingScreen" 
          component={LandingScreen} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="ProfileScreen" 
          component={ProfileScreen} 
          options={{ title: 'Follower' }}
        />
        <Stack.Screen 
          name="ArticlesScreen" 
          component={ArticlesScreen} 
          options={{ title: 'Articles' }}
        />
        <Stack.Screen 
          name="ArticleScreen" 
          component={ArticleScreen} 
          options={{ title: 'Article' }}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default AppStackContainer;