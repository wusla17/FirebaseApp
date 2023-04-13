import React, { useState } from "react";
import { StyleSheet, View, Text,  TextInput, Button} from "react-native";

export default function VerifyCode(props){
    const [code, setCode] = useState('')
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Enter OTP</Text>
        <TextInput autoFocus keyboardType="numeric" style={styles.input} value={code} onChangeText={setCode}/>
        <Button title="Confirm OTP" onPress={() => props.onSubmit(code)}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center'
    },
    input : {
        borderWidth: 2,
        borderColor : 'lightblue',
        width: 300,
        marginVertical: 30,
        fontSize: 25,
        padding: 10,
        borderRadius: 8
    },
    text: {
        fontSize: 25
    }
})