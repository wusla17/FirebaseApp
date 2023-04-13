import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import database from "@react-native-firebase/database";


let itemRef = database().ref('/Items');

function List() {
    const [itemArray, setItemArray] = useState([]);
    const [keys, setKeys] = useState([]);
    const [ifupdate, setIfUpdate] = useState(false)
    const [updateText, setUpdateText] = useState([]);
    const [updateIndex, setUpdateIndux] = useState([]);
    useEffect(() => {
        itemRef.on('value', snapshot => {
            let data = snapshot.val();
            const items = Object.values(data);
            setItemArray(items);
        })
    }, [])
    const handleDelete = (index) => {
        let childKey = keys[updateIndex]
        itemRef.child(childKey).remove();
    }
    const handleUpdate = (name, index) => {
        setUpdateText(name)
        setUpdateIndux(index)
        setIfUpdate(true)
    }
    const submitUpdate = () => {
        let childKey = keys[index]
        itemRef.child(childKey).update({name : updateText})
        setIfUpdate(false)
    }
    return (
        <View style={styles.container}>
            {itemArray.length > 0 ?

                ifupdate ? <View><TextInput style={styles.input} value={updateText} onChangeText={setUpdateText }/><Button title="Submit" onPress={() => submitUpdate()}/><Button title="Cancel" onPress={() => setIfUpdate(false)}/></View> :

                    <View style={styles.list}> {itemArray.map((item, index) => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Button title="Update" onPress={() => handleUpdate(item.name, index)}/>
                                <Button title="Delete" onPress={() => handleDelete(index)} />
                            </View>

                        )
                    })}</View> : <Text>No Items</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    list: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        paddingEnd: 10
    },
    input : {
        borderWidth: 2,
        borderColor : 'black'
    }
})


export default List;