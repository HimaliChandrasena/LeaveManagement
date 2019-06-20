// import React, { Component } from 'react';
// import { Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/Login';
import Form from './components/Form';

const MainNavigator = createStackNavigator({
  Home: { screen: Login },
  Profile: { screen: Form },
});

const App = createAppContainer(MainNavigator);


// export default App;

//     return ( 
//       <MainNavigator />
//     );
export default App;
