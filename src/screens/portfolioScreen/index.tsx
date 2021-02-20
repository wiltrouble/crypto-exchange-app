import React from 'react'
import { View, Text, Image } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import PortfolioCoin from '../../components/portofolioCoin';

import styles from "./styles";
const image = require("../../../assets/images/Saly-10.png")

const portfolioCoins = [{
    id: 1,
    name: 'Virtual Dollars',
    image: 'https://w7.pngwing.com/pngs/450/133/png-transparent-bitcoin-cryptocurrency-virtual-currency-decal-blockchain-info-bitcoin-text-trademark-logo.png',
    symbol: 'USD',
    amount: '69420',
    valueUSD: '69420',
}, {
    id: 2,
    name: 'Bitcoin',
    image: 'https://w7.pngwing.com/pngs/450/133/png-transparent-bitcoin-cryptocurrency-virtual-currency-decal-blockchain-info-bitcoin-text-trademark-logo.png',
    symbol: 'USD',
    amount: '69420',
    valueUSD: '69420',
}, {
    id: 3,
    name: 'Other Dollars',
    image: 'https://w7.pngwing.com/pngs/450/133/png-transparent-bitcoin-cryptocurrency-virtual-currency-decal-blockchain-info-bitcoin-text-trademark-logo.png',
    symbol: 'USD',
    amount: '69420',
    valueUSD: '69420',
}]

const PortfolioScreen = () => {
    return (
        <View style={styles.root} >
            <Image style={styles.image} source={image}/>
            <View style={styles.balanceContainer}>
                <Text style={styles.title}>Portfolio balance</Text>
                <Text style={styles.balance}>$69.420</Text>
            </View>
            
            <FlatList
            style={{width:'100%'}}
                data={portfolioCoins}
                renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
            />
        </View>
    )
}

export default PortfolioScreen;
