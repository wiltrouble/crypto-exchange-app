import React from 'react'
import { View, Text, Image } from "react-native";

import styles from "./styles";
const image = require("../../../assets/images/Saly-1.png");

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <Text>Hme screem</Text>

        </View>    
    )
}

export default HomeScreen;
