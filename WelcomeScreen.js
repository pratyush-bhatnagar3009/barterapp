import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions} from 'react-native';
import db from '../config';
import firebase from 'firebase';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    
    usersignup=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            return Alert.alert("useraddedsuccessfully")
        })
        .catch((error)=>{
            var errorcode = error.code
            var errormesseage = error.messeage
            return Alert.alert("errormesseage")
        })
    }



    userlogin=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            return Alert.alert("successfullylogin")
        })
        .catch((error)=>{
            var errorcode = error.code
            var errormesseage = error.messeage
            return Alert.alert("errormesseage")
        })
    }
    render() {
        return (
          <View style={styles.container}>
          <View style={styles.wrapper}>
          <Text style={styles.titleText}>Barter System App</Text>
          
          <View style={styles.inputWrap}>
            <TextInput
              value={this.state.email}
              keyboardType = 'email-address'
              onChangeText={(email) => this.setState({ email })}
              placeholder='Email'
              placeholderTextColor = 'white'
              style={styles.input}
            />
            </View>
            <View style={styles.inputWrap}>
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              placeholderTextColor = 'white'
              style={styles.input}
            />    
            </View>     
            <TouchableOpacity
              style={styles.button} onPress={this.userlogin.bind(this)}
           >
            <Text> Sign Up / Login </Text>
           </TouchableOpacity>
           </View>
           </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#b8e6c2',
        },
        wrapper: {
            paddingHorizontal: 10,
          },
          inputWrap: {
            flexDirection: "row",
            marginVertical: 10,
            height: 45,
            backgroundColor: "transparent"
          },
        titleText:{
            marginHorizontal: 20,
            paddingLeft: 45,
            borderRadius: 20,
            backgroundColor: "transparent",
            marginHorizontal: 10,
            alignItems: "center",
            justifyContent: 'center',
            fontSize: 20,
        },
        input:{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            width: DEVICE_WIDTH - 40,
            height: 40,
            marginHorizontal: 20,
            paddingLeft: 45,
            borderRadius: 20,
            color: '#ffffff',
            marginHorizontal: 10,
        },
        button: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10,
        },
        buttonText:{
            fontSize: 10,
            alignItems: 'center',
            justifyContent: 'center',
          },
      });
      
    