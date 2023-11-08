import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: 10,
        border: '1px solid #ccc',
        margin: 5,
    },
    

    counter: {
        marginRight: 10, 
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 150,
        height: 150,
        borderRadius: 100,
    },

    firstButton: {
        backgroundColor: '#1E90FF',
    },

    buttonText: {
        color: 'white',
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center'
    },

    infoText: {
        marginLeft: 10, 
    },      

    infoIcon: {
      width: 30,
      height: 30,
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: 300,
      alignItems: 'center',
    },
});