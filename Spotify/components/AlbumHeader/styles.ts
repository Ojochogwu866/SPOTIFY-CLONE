import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 20,
    },
    image:{
      width: 200,
      height: 200,
      margin: 15,
    },
    name:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    creator:{
        color: 'lightgray',
        margin: 5,
        fontSize: 16,
    },
    likes:{
        color: 'lightgray',
        margin: 5,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1cd05d',
        height: 50,
        width: 200,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: 'lightgray',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;