import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 45,
        width: '100%',
        backgroundColor: '#131313',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    image:{
        width: 75,
        height: 75,
        marginRight: '10',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    }

})

export default styles;