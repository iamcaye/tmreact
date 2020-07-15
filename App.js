import * as React from "react";
import {Text, View, Image, TextInput, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';




const HomeScreen = ({navigation}) => (
    <>
    <View>
        <Text style={{textAlign : 'center', fontSize : 20, fontWeight : 'bold', marginTop : 15}}>
            Bienvenido!!
        </Text>
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    </>
);

const DetailsScreen = () => (
    <View>
        <Text style={{textAlign : 'center', fontSize : 20, fontWeight : 'bold', marginTop : 15}}>
            Detalles!!
        </Text>
    </View>
);


const Stack = createStackNavigator();

const Main = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Main;
