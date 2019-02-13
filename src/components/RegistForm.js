import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Container, Header, Left, Title, Body, Right} from 'native-base'
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, registUser } from '../actions';
import {Icon} from 'react-native-elements'
class RegistForm extends Component {


    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.registUser({ email, password });
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
                Daftar
            </Button>
        );
    }

    render() {
        return (
            <Container>
                <Header >
                    <Left>
                    <Icon name='arrow-back' color='white' onPress={() => this.props.navigation.goBack()} />
                    </Left>
                    <Body>
                        <Title>Daftar</Title>
                    </Body>
                    <Right></Right>
                </Header>
                
                            
            <View>
                {/* <Header
                    centerComponent={{ text: 'Daftar disini', style: { color: '#fff' } }}
                /> */}
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
                        <Button title="Login Disini" onPress={() => this.props.navigation.goBack()}>Login Disini</Button>
                    </CardSection>
                </Card>
            </View>
            </Container>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    const { email, password, error, loading, user } = state.auth;

    return { email, password, error, loading, user };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, registUser})(RegistForm);