import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {Button,Icon} from 'native-base'

export default Login =({navigation})=>{
    //..
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    async function LoginUser(){
        await firebase
        .auth()
        .signInWithEmailAndPassword(email.trim(),password)
        .then((user)=>{
         Alert.alert(
                'WELCOME '
            )
            navigation.navigate("Donor");
        })
        .catch((error)=>{
            alert(error)
        })

    }


    return(
        <View style={styles.container}>
            <View style={styles.forms}>
                <TextInput
                placeholder={'Email'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setEmail(text)}
                value={email}
                style={styles.textinput}>

                </TextInput>

                <TextInput
                placeholder={'Password'}
                secureTextEntry
                inlineImageLeft={"account"}
                keyboardType="default"
                // ...
                onChangeText={(text)=>setPassword(text)}
                value={password}

                style={styles.textinput}>
                </TextInput>
            </View>

            {/* //.. */}

           <Button 
           onPress={()=>LoginUser()}
           style={{
               borderRadius:3,
               padding:20,
               marginTop:25,
               justifyContent:'center',
               backgroundColor:'#307ecc'
           }}>
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:25,

               }}>
                   LOGIN
               </Text>

           </Button>
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        padding:20,
        marginVertical:110,
        marginTop:10,
    },
    forms:{
        flexDirection:'column',
        
    },
    textinput:{
            fontSize:20,
            fontWeight:'300',
            borderColor:'#307ecc',
            borderWidth:3,
            borderRadius:5,
            padding:10,
            marginTop:10,
    }
})