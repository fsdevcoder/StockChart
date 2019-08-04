import React from "react";
import { TextInput, View, Text, Button, Alert } from 'react-native';
import { withNavigation } from 'react-navigation'
import mainstyles from "../assets/styles";

class Login extends React.Component { 
    static navigationOptions = {
        headerTitleStyle: mainstyles.myheadertitlestyle,
        headerStyle: mainstyles.myheaderstyle,
        headerTintColor: '#fff',
        title: 'Home',
    }
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }
    render() {
        return (
            <View style={mainstyles.MainContainer}>
                <Text style={mainstyles.title}>Login</Text>
                <TextInput
                    style={mainstyles.inputfield}
                    placeholder="username"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    style={mainstyles.inputfield}
                    secureTextEntry={true}
                    placeholder="password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button
                    title="Login"
                    onPress={() =>{
                        if(this.state.username=="keith" && this.state.password=="123")
                            this.props.navigation.navigate('WatchList')
                        else
                            Alert.alert(
                                'Login error!',
                                'Please type correct username and password',
                                [
                                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                                ],
                                {cancelable: false},
                            );
                        }
                    }
                />
            </View>
        );
    }
}

export default withNavigation(Login)