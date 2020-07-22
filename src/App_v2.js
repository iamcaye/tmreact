import * as React from 'react';
import {ScrollView, StyleSheet, Button, View, Text, TextInput} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';

import HomeScreen from './App';

class Note extends React.Component {
    render(){
        return(
            <View key={this.props.keyval} style={{flexDirection: 'row', marginVertical: 8}}>
                <Text style={styles.reminder}>- {this.props.val.title}</Text>
                <Button
                    style={styles.clearButton}
                    title= 'CLEAR'
                    color= 'red'
                    onPress={this.props.deleteMethod}
                />
            </View>
        );
    }

}

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            text : '',
        }
    }
    render(){
        let notes = this.state.data.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={() => this.deleteNote(key)}
                    />
        });
        return(
            <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Team Manager</Text>
            </View>
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    placeholder= 'Escribe'
                    onChangeText= {(text) => this.setState({text}) }
                    value = {this.state.text}
                />
                <Button
                    style={styles.button}
                    title='SUBMIT'
                    onPress={
                        this.addNote.bind(this)
                    }
                />
                <ScrollView style={styles.list}>
                    {notes}
                </ScrollView>
            </View>
            </>
        );
    }

    addNote(){
        if(this.state.text != ''){
            this.state.data.push({id: this.state.data.length.toString(), title: this.state.text});
            this.setState({data : this.state.data});
            this.setState({text: ''});
            console.log(this.state.data);
        }
    }

    deleteNote(key){
        this.state.data.splice(key, 1);
        this.setState({data: this.state.data});
    }
}

const Tab = createBottomTabNavigator();

class App extends React.Component{
    render(){
        return(
            <NavigationContainer initialRoute='Main'>
                <Tab.Screen name='Main' component={Main}/>
                <Tab.Screen name='HomeScreen' component={HomeScreen}/>
            </NavigationContainer>
        );
    }
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
    reminder:{
        flex: 3,
        fontSize: 15,
        margin: 8,
        justifyContent: 'center'
    },
    clearButton:{
        flex:1,
        padding: 0,
        alignItems: 'flex-end'
    },
    body:{
        backgroundColor: 'gainsboro',
        borderRadius : 8,
        margin: 9,
        padding: 8
    },
    input:{
        height: 30,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius : 5,
        paddingHorizontal: 6
    },
    button:{
        marginVertical: 8,
        paddingVertical: 8
    }
})

export default Main;
