import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#777777'
    },
    image: {
        height: 175,
        resizeMode: 'contain',

    },
    balance: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#585858",
    },
    balanceContainer: {
        marginVertical: 20, 
        width: '100%'
    }
})

export default styles;