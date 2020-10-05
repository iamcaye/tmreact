import * as React from "react";
import {Text, View, ScrollView, Image, TextInput, Button, StyleSheet, FlatList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

let DATA = []

const HomeScreen = () => {
    const [text, setText] = React.useState('');
    const [STUFF, setSTUFF] = React.useState([]);

    return(
        <>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Team Manager</Text>
        </View>
        <View style={styles.container}>
            <TextInput 
                style={styles.inputS}
                editable
                placeholder="Escribe"
                onChangeText = {text => setText(text)}
                value={text}
            />
            <Button
                title= "Submit!"
                style={styles.button}
                onPress={() => {
                    if(text != ''){
                        DATA.push({id : DATA.length.toString(), title : text});
                        setText('');
                        setSTUFF(DATA);
                        console.log(STUFF);
                    }
                }}
            />
            <ScrollView>
                {STUFF.map(item => (
                    <>
                    <View key={item.id} style={styles.item}>
                        <Text style={styles.title}>- {item.title}</Text>
                    <Button
                        title='CLEAR'
                        color='red'
                        style={styles.rButton}
                        onPress={() => {
                            DATA.splice(parseInt(item.id),1);
                            console.log("Borrando item " + item.id);
                            setSTUFF(DATA);
                        }}
                    />
                    </View>
                    </>
                ))}
            </ScrollView>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    header:{
        padding: 3,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    headerTitle:{
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20
    },
    container:{
        backgroundColor: 'gainsboro',
        borderRadius : 8,
        margin: 9,
        padding: 8
    },
    inputS:{
        height: 30,
        marginVertical: 8,
        backgroundColor: 'white',
        borderRadius : 5,
        paddingHorizontal: 6
    },
    button:{
        marginTop: 8,
        padding: 8
    },
    item: {
        padding: 5,
        marginVertical: 3,
        flexDirection: 'row',
    },
    title: {
        flex: 3,
        fontSize: 15,
        margin: 8,
        justifyContent: 'center'
    },
    rButton:{
        flex:1,
        padding: 0,
        alignItems: 'flex-end',
        width: 100
    }
});

export default HomeScreen;
