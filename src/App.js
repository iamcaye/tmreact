import * as React from "react";
import {Text, View, ScrollView, Image, TextInput, Button, StyleSheet, FlatList} from 'react-native'
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
        <View style={{flexDirection: 'row', marginTop: 8, padding:0}}>
        <Item title={item.title}/>
        <Button style={styles.rButton} 
            title = 'clear'
            color = 'red'
            onPress={() => {
                console.log("Borrando item" + item.id);
                DATA.pop(parseInt(item.id));
                setSTUFF(DATA);
            }}
        />
        </View>
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
            <Button
                title= "Submit!"
                style={styles.button}
                onPress={() => {
                    if(text != ''){
                        DATA.push({id : DATA.length.toString(), title : text});
                        setText('');
                        setSTUFF(DATA);
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
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 3
    },
    title: {
      fontSize: 15,
    },
    rButton:{
        flex:2,
        padding:0,
        margin: 0,
        textAlign: 'center',
    }
});

export default HomeScreen;
