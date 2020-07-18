import * as React from "react";
import {Text, View, ScrollView, Image, TextInput, Button, StyleSheet, FlatList, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>- {title}</Text>
    </View>
);

let DATA = []

const HomeScreen = () => {
    const [text, setText] = React.useState('');
    const [STUFF, setSTUFF] = React.useState([]);

    const renderItem = ({item}) => (
        <Item title={item.title}/>
    );

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.inputS}
                editable
                placeholder="Escribe"
                onChangeText = {text => setText(text)}
                value={text}
            />
            <Butto- n
                title= "Submit!"
                style={styles.button}
                onPress={() => {
                    if(text != null){
                        DATA.push({id : DATA.length, title : text})
                        setSTUFF(DATA);
                        setText('');
                        console.log(DATA);
                    }
                }}
            />
            <ScrollView>
                <FlatList
                    data={STUFF}
                    renderItem = {renderItem}
                    keyExtractor = {item => item.id}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor : 'gainsboro',
        paddingTop : 0,
        margin : 10,
        padding : 8,
        borderRadius: 6,
    },
    player:{
        display: 'flex',
        margin: 0,
        padding: 0,
        textAlign: 'right'
    },
    inputS:{
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        height: 30,
        marginTop: 20,
        marginBottom: 10
    },
    button:{
        marginTop: 20,
        padding: 20
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
      fontSize: 15,
    },
});

export default HomeScreen;
