import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Left, Title, Body } from 'native-base';
import { Card, Button, CardSection } from './common';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { logoutUser } from '../actions';

class Profile extends Component {

    static navigationOptions = {
        drawerLabel: 'My Profile',
    };

    state = { email: '' };

    componentDidMount() {
        // console.log(this.props.user)
        if (this.props.user) {
            if (this.props.user.user) {
                this.setState({ email: this.props.user.user.email });
            }
            else {
                this.setState({ email: this.props.user.email });
            };
        };
    };

    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login');
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Instagram</Title>
                    </Body>
                </Header>
                <View >
                    <Card>
                        <CardSection>
                            <Text>Logged In: {this.state.email}</Text>
                        </CardSection>
                        <CardSection>
                            <Button onPress={this.logOut}>
                                Log Out
                        </Button>
                        </CardSection>
                    </Card>
                </View>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    const { user } = state.auth;

    return { user }
};

export default connect(mapStateToProps, { logoutUser })(Profile);