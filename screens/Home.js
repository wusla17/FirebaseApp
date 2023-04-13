import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";


function Home({navigation}){
    return(
        <View>
            <Text>Home Screen</Text>
            <Button tittle="Add an Item" onPress={() => navigation.navigate('AddItem')}/>
            <Button tittle="List of Item" onPress={() => navigation.navigate('List')}/>
        </View>
    )
}


export default Home;