import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function Home({ navigation }) {
  const showAlert = () => {
    Alert.alert(
      'Hello!',
      'You clicked the button!',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: true },
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Click for</Text>
        <Button
          title="Profile page"
          onPress={() => navigation.navigate('Profile')}
        />    
        <Text></Text>
         <Button
          title="ToDo page"
          onPress={() => navigation.navigate('Todo')}
        />    
      </View>

      <View>
         <View>
          <Text style={[styles.red]}>Hello</Text>
        </View>
        <Button
          title="Click Here"
          onPress={showAlert} //  When pressed, it triggers the alert
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  red:{
    fontSize:20,
    fontWeight:'bold',
  },
  btn:{
    marginTop:20,
  }
});
