import React from 'react'
import { View, Text, Image } from "react-native";
import styles from './styles';

export interface PortfolioCoinProps {
    portfolioCoin: {
        image: string,
        name: string,
        symbol: string,
        amount: Number,
        valueUSD?: Number
    }
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
    const {
        portfolioCoin: {
            image,
            name,
            symbol,
            amount,
            valueUSD
        }
    } = props;
    
    return (
        <View style={styles.root}>
            <View style={styles.left}>
                <Image style={styles.image} source={{uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.value}>${valueUSD}</Text>
                <Text style={styles.valueSimbol}>{symbol} {amount}</Text>
            </View>            
        </View>
    )
}

export default PortfolioCoin;
