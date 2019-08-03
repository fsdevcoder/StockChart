import React from "react";
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
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
                    onPress={() => this.props.navigation.navigate('WatchList')}
                />
            </View>
        );
    }
}

export default withNavigation(Login)