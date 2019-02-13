import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Title, Body } from 'native-base'
import { Icon } from 'react-native-elements'
class Timeline extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Instagram</Title>
                </Header>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>halaman Timeline</Text>
                </View>
            </Container>
        )
    }
}
export default Timeline;