import React,{useState} from "react";
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";

import auth from '@react-native-firebase/auth'
import Home from "./Home";


export default function Login(navigation){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = () => {
            auth().createUserWithEmailAndPassword(email, password).then((res) => {
                console.log("response", res)
                Alert.alert("User added sucsecfully")
            })
            .catch((error) => {
                console.log("error", error)
                Alert.alert(error.message)
            })
    }
    const login = () => {
        auth().signInWithEmailAndPassword(email, password).then((res) => {
            console.log("response", res)
            navigation.navigate(Home)
        })
        .catch((error) => {
            console.log("error", error)
            Alert.alert(error.message)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Login</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="Email" />
            <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="Password" />
            <View style={styles.button}>
                <Button title="Signup" onPress={signup}/>
                <Button title="Login" onPress={login}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tittle : {
        fontSize : 21,
        marginBottom: 20
    },
    input : {
        width : 300,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#6d69c3',
        marginVertical: 10,
        padding: 15
    },
    button : {
        width :150,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})