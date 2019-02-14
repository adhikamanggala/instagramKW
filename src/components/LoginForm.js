import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { Icon } from 'react-native-elements'
class LoginForm extends Component {

    componentDidUpdate() {
        if (this.props.user) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'MainMenu' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        );
    }
    renderFormLogin = () => {
        if (this.props.checkedAuth === false) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Instagram</Text>
                    <Spinner />
                </View>
            )
        }
        return (
            <Container>
                <Header >
                    <Body>
                        <Title align="center">Please Log In</Title>
                    </Body>
                </Header>
                <View>
                    <Card>

                        <CardSection>
                            <Input
                                label="Email"
                                placeholder="email@email.com"
                                onChangeText={this.onEmailChange}
                                value={this.props.email}
                            />
                        </CardSection>
                        <CardSection>
                            <Input
                                secureTextEntry
                                label="Password"
                                placeholder="password"
                                onChangeText={this.onPasswordChange}
                                value={this.props.password}
                            />
                        </CardSection>
                        {this.renderError()}
                        <CardSection>
                            {this.renderButton()}
                        </CardSection>
                        <CardSection>
                            <Button title="Registrasi disini" onPress={() => this.props.navigation.navigate('Regist')}>Sign Up</Button>
                        </CardSection>
                    </Card>
                </View>
            </Container>
        )
    }
    render() {
        return this.renderFormLogin()
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }, titleTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    }
};

const mapStateToProps = (state) => {
    const { email, password, error, loading, user, checkedAuth } = state.auth;

    return { email, password, error, loading, user, checkedAuth };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);