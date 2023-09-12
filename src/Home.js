import { Pressable, Text, TextInput, View, resultNumber } from 'react-native';
import React, { useState } from 'react';
import { presets } from './babel.config';

const Home = ({ navigation }) => {
    const [firstNumber, setFirstNumber] = useState(2);
    const [secondNumber, setSecondNumber] = useState(3);
    const [result, setResult] = useState(0);

    const Sum = () => {
        const total = parseInt(firstNumber) + parseInt(secondNumber);
        setResult(total);
        navigation.navigate('SecondPage', { resultNumber: total });
    }

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

            <TextInput
                style={{
                    width: 200,
                    height: 70,
                    backgroundColor: 'lightgray',
                    borderRadius: 15,
                    marginBottom: 20,
                    textAlign: 'center',
                }}
                keyboardType='number-pad'
                onChangeText={setFirstNumber}
            />

            <TextInput
                style={{
                    width: 200,
                    height: 70,
                    backgroundColor: 'lightgray',
                    borderRadius: 15,
                    marginBottom: 50,
                    textAlign: 'center'
                }}
                keyboardType='number-pad'
                onChangeText={setSecondNumber}
            />

            <Pressable
                style={({ pressed }) => [
                    {
                        width: 200,
                        height: 100,
                        backgroundColor: 'tomato',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                        marginBottom: 30,
                        transform: [pressed ? { translateY: 15 } : { translateY: 0 }],
                        shadowRadius: 3.5,
                        shadowColor: 'black',
                        shadowOpacity: pressed ? 0.2 : 0.25,
                        shadowOffset: pressed
                            ? { width: 0, height: 1 }
                            : { width: 0, height: 3 },
                    },
                ]}

                onPress={Sum}

            >
                <Text> BUTON </Text>
            </Pressable>
            <Text>Sayı-1 = {firstNumber} </Text>
            <Text>Sayı-3 = {secondNumber} </Text>
            <Text>Sonuç = {resultNumber} </Text>
        </View >
    )
}

export default Home

