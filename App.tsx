import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [name, writeName] = useState('')
  return (
    <View style={styles.container}>
      <Text>This is going to be my first react project.</Text>
      <Text>My name is {name} </Text>
      <TextInput style={styles.textInput} onChangeText={(value)=>writeName(value)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    borderWidth:1,
  }
});
