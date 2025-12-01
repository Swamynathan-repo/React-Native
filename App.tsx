// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import {  StyleSheet, View,Text, Button, Alert } from 'react-native';
// // import {
// //   SafeAreaProvider,
// // } from 'react-native-safe-area-context';

// function App() {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   return (
// //     <SafeAreaProvider>
// //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
// //       <AppContent />
// //     </SafeAreaProvider>
// //   );
// // }

// // function AppContent() {
//   const showAlert = () => {
//     Alert.alert(
//       'Hello!',
//       'You clicked the button!',
//       [
//         { text: 'OK', onPress: () => console.log('OK Pressed') }
//       ],
//       { cancelable: true }
//     );
//   };
  
//   return (
//     <View style={styles.container}>
//      <View>
//            <Text style={[styles.red]}>Hello</Text>
//      </View>
//      <View>
//       <Button 
//         title="Click Here" 
//         onPress={showAlert}  //  When pressed, it triggers the alert
//       />
     
//      </View>
     
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:'row',
//     justifyContent: 'space-evenly',
//     // alignItems: 'center',
//     margin:20,
//     padding:0,
//   },
//   red:{
//     color:'blue',
//     alignItems:'center',
//     margin:10,
//   },
// });

// export default App;


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import Todo from "./screens/Todo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Todo" component={Todo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
