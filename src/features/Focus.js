import React,{useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {colors} from '../utilities/colors'
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utilities/sizes';


export const Focus = ({addSubject}) =>{
  const [subject, setSubject] = useState(null);

  console.log(subject);
  return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
    <TextInput 
    style={styles.textInput}
    label="what would you like to focus on?"
    onChangeText={setSubject}
    />
    <RoundedButton title="+"  size={50}
    onPress={()=>addSubject(subject)}
     style={styles.button}/>
    </View>
  </View>
)
};

const styles = StyleSheet.create({
  container:{

  },
  inputContainer:{ 
    padding:spacing.lg,
    flexDirection:'row',
    // justifyContent :'top',
  },
  textInput:{
    flex:1,
    marginRight:spacing.sm
  },
  button: {
    justifyContent:'center'
  }
  
})