import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Alert } from "react-native";
import database from '@react-native-firebase/database'

let addItem = item => {
    database().ref('/Item').push({
        name: item
    })
}


function AddItem(){
    const [name, setName] = useState('');
    const handlesubmit = () => {
        addItem(name);
        setName('');
        Alert.alert('Item saved sucssecfully')
    }
    return(
        <View style={styles.Main}>
            <Text style={styles.title}>AddItem</Text>
            <TextInput style={styles.itemInput} value={name} onChangeText={text => setName(text)}/>
            <TouchableHighlight onPress={handlesubmit} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '36565fc'
    },
    title : {
        marginBottom: 20,
        fontSize: 25,
        alignItems: 'center'
    },
    itemInput: {
        height: 40,
        padding: 4 ,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText : {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor:'#',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent:'centre'
    }
})


export default AddItem