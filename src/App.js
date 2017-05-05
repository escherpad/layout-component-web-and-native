import React from 'react';
import Flex from './Flex'
import FlexItem from "./FlexItem";
import {View, Text} from 'react-native-web';

export default function App() {
    return (
        <View className="example-container" style={{backgroundColor: 'green'}}>
            <Text>Flex row example</Text>
            <Flex row>
                <FlexItem fixed width="100px" style={{backgroundColor: "gray"}}>
                    the first fixed element
                </FlexItem>
                <FlexItem fluid style={{backgroundColor: "red"}}>
                    this is a fluid column
                </FlexItem>
                <FlexItem fixed width="100px" style={{backgroundColor: "gray"}}>
                    the second fixed element
                </FlexItem>
            </Flex>
        </View>);
}

