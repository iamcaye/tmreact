import * as React from 'react' 
import {ScrollView, StyleSheet, Button, View, Text, TextInput} from 'react-native';

const PlayerView = (props) => (
  <>
    props.map(item => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.num}</Text>
            <Text>{item.lvl}</Text>
        </View>
    ))
  </>
);
