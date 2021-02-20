import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        marginVertical: 10,        
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10,

    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,

    },
    symbol: {
        color: '#6b6b6b',

    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    valueSimbol: {
        fontSize: 10,
    },
    right: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'flex-end',
    }
})

export default styles;