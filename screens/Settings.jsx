import React,{useState} from 'react';
import { View, Text, Alert, Button, TextInput, StyleSheet } from 'react-native';


export default Settings = ({navigation}) => {

  const[name, setName]=useState("");
  const[mobile, setMobile]=useState("");
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !mobile){
      Alert.alert("All fields are required");
      return;
    }
    Alert.alert(`Registered successfully: ${name}`);
    console.log("User Registered:", { name, email, password });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}> Settings</Text>

      <TextInput
       placeholder='Name'
      //  value='name'
       onChangeText={setName}
      //  onChangeText={(text) => setName(text)}
       style={styles.input}
      />

       <TextInput
       placeholder='Mobile'
      //  value='mobile'
       onChangeText={setMobile}
       style={styles.input}
      />

       <TextInput
       placeholder='Email'
      //  value='email'
       keyboardType='email-address'
       onChangeText={setEmail}
       style={styles.input}
      />

       <TextInput
       placeholder='Password'
      //  value='password'
       onChangeText={setPassword}
       secureTextEntry
       style={styles.input}
      />

    <Button style={styles.buttonContainer}
    title='Submit'
    onPress={handleRegister}
    />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

