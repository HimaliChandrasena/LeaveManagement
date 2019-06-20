import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Alert, ScrollView
} from 'react-native';

export default class Login extends Component {

    static navigationOptions = {
        title: '',
        headerStyle: { backgroundColor: 'transparent', height: 0 }
    };

    constructor(props) {
        super(props);
        this.state = { isSignin: false, user_email: '', user_password: '' };
    }

    // onTap() {
    //     const { navigate } = this.props.navigation;
    //     this.setState({ isSignin: true });
    //     navigate('Profile');
    //     }


    onTap() {
        console.log("Working");
        const { user_email, user_password } = this.state;
        const { navigate } = this.props.navigation;
        fetch('https://lmssusl.000webhostapp.com/login.php')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Hello");
                console.log(responseJson);
                // If server response message same as Data Matched
                // if (responseJson.results[1] === 'Data Matched') {
                //     console.log(responseJson);
                //     //Then open Profile activity and send user email to profile activity.
                //     navigate('Profile', { Email: user_email });
                //     this.setState({ loading: false });

                // }
                // else {
                //     console.log(responseJson);
                //     Alert.alert(responseJson.results[1]);
                //     this.setState({ loading: false });
                // }

            }).catch((error) => {
                console.error(error);
                // Alert.alert(error);
                // Alert.alert("No internet connection");
                this.setState({ loading: false });
            });
    }

    render() {
        // if (this.state.isSignin) {
        //     return <Form />;
        // }
        return (
            <View style={{ flex: 1 }}>
                {/* <StatusBar barStyle="light-content" /> */}
                {/* <ScrollView keyboardShouldPersistTaps='always'> */}
                <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
                    <TouchableWithoutFeedback>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image
                                    style={styles.logo}
                                    source={require('../images/logo.jpg')}
                                />
                                <Text style={styles.title}>Account Information</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter userID/email"

                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    KeyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onChangeText={user_email => this.setState({ user_email })}
                                    value={this.state.user_email}

                                //onSubmitEditing={() => this.refs.txtPassword.focus()}
                                // onChangeText= { userEmail  => this.setState({userEmail})}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter password"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={'txtPassword'}
                                    onChangeText={user_password => this.setState({ user_password })}
                                    value={this.state.user_password}
                                // onChangeText= { userPassword  => this.setState({userPassword})}
                                />
                                <TouchableOpacity onPress={this.onTap.bind(this)} style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}> SIGN IN</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                {/* </ScrollView> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 128,
        height: 56,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    }
});
