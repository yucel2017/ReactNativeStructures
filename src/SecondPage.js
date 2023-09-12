import { Text, View } from 'react-native'
import React from 'react'

const SecondPage = ({route, navigation }) => {
    return (
        <View 
        style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'tomato'
        }}
        >
           <Text>SecondPage </Text>
           <Text> {route.params.resultNumber} </Text>
        </View>
    )
}

export default SecondPage

