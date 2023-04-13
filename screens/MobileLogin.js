import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import auth from '@react-native-firebase/auth'
import VerifyCode from "./VerifyCode";
import MobileNumber from "./MobileNumber";

export default function MobileLogin(){
    const [Confirm, setConfirm] = useState(null)

    const mobileLogin = async (phoneNumber) => {
        console.log(phoneNumber)
        // const confirmation = await 
        auth().signInWithPhoneNumber('+91', phoneNumber).then((res) => {
            console.log(res)
            setConfirm(confirmation);
        })
        .catch((error) => {
            console.log("error", error)
        })
    }

    const confirmVerification = async () => {
        try{
            await confirm.confirm(code);
        }
        catch(error) {
            Alert.alert('Invalid Code')
        }
    }

    auth().onAuthStateChanged((user) => {
        if(user){
            setConfirm(null)
            Navigation.navigate('Home')
        }else{
            if(confirm){
                Alert.alert('Authenticatio Failed')
            }
            
        }
    })

    if(confirm) return <VerifyCode onSubmit={confirmVerification}/>
    return <MobileNumber onSubmit={mobileLogin}/>
}