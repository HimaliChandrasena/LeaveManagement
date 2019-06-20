import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { createStackNavigator } from 'react-navigation'; 

export default class Form extends Component {

    static navigationOptions = {
        title: 'Form',
    };

    render() {
        return (
            <View style={styles.regform}>
                    <Text style={styles.header}>Leave Application</Text>
                    <TextInput 
                    style={styles.textinput} placeholder="Reg ID" 
                    underlineColorAndroid={'transparent'} 
                    />
                    <TextInput 
                    style={styles.textinput} placeholder="Name" 
                    underlineColorAndroid={'transparent'} 
                    />
                    <TextInput 
                    style={styles.textinput} placeholder="Initials" 
                    underlineColorAndroid={'transparent'} 
                    />
                    <TextInput 
                    style={styles.textinput} placeholder="Designtion" 
                    underlineColorAndroid={'transparent'} 
                    />
                    <TextInput 
                    style={styles.textinput} placeholder="level" 
                    underlineColorAndroid={'transparent'} 
                    />
                    <TextInput 
                    style={styles.textinput} placeholder="department" 
                    underlineColorAndroid={'transparent'} 
                    />
                    <TextInput 
                    style={styles.textinput} placeholder="First_appoinment_date" 
                    underlineColorAndroid={'transparent'} 
                    />
                    <TextInput 
                    style={styles.textinput} placeholder="Password" 
                    underlineColorAndroid={'transparent'} 
                    />
                    <TouchableOpacity style={styles.button}>
                            <Text style={styles.btntext}>Submit</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    regform: {
        paddingLeft: 60,
        paddingRight: 60,
        flex: 1,
        backgroundColor: '#36485f',
        justtifyContent: 'center',
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
        paddingTop: 20,
    },
    textinput: {
        alignSelf: 'stretch',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        color: '#fff',
        marginBottom: 10,
        height: 40,
        fontSize: 15,
      },
      button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,  
      },
      btntext: {
        color: '#fff',
        fontWeight: 'bold',   
      }
};
