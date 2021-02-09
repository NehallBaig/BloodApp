import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
} from 'react-native';
import {Button,Icon} from 'native-base'

import Login from './Login'
import Registration from './Registration'




//...
export default function Welcom({navigation}) {

	return (
		<View style={styles.container}>
           

            <View style={styles.buttonPlaceholder}>
                {/* //..UPDATE BUTTON */}
                <Button
                onPress={()=>navigation.navigate('Login')}
                 style={styles.login}>
                <Text style={styles.textstyle}>
                        Login
                    </Text>
                </Button>
                {/* //..UPDATE BUTTON */}
                <Button 
                onPress={()=>navigation.navigate('Registration')}
                style={styles.login}>
                <Text style={styles.textstyle}>
                        Register
                    </Text>
                </Button>

            </View>
        </View>
	);
}

const styles = StyleSheet.create({
	container: {
        flexDirection:'column',
        marginHorizontal:70,
        alignSelf:'center',
        marginVertical:150,
        
	},
	header1: {
		
		fontSize: 30,
        color: '#307ecc',
        fontWeight:'bold'
    },
    header2: {
        position:'relative',
        textAlign:'center',
		fontSize: 15,
		color: '#307ecc',
		
    },
	buttonPlaceholder: {
        flexDirection: 'column',
        flex:1,
        marginTop:50,

	},
	login: {
        padding:20,
        borderRadius:3,
        marginBottom:10,
        backgroundColor:'#307ecc',
        justifyContent:'center',
        
    },
    textstyle:{
            color:'white',
            fontSize:30,
            textAlign:'center',
            width:'100%',
            
    }
    
});