import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Title, Body } from 'native-base'
import { photoUpdate, photoCreate } from '../actions'
import { connect } from 'react-redux';
import { CardSection, Input, Button } from './common';
import { Icon } from 'react-native-elements';


class PostPictForm extends Component {

    onPhotoChange = (text) => {
        this.props.photoUpdate('photo', text);
    }

    onCaptionChange = (text) => {
        this.props.photoUpdate('caption', text);
    }

    onButtonPress = () => {
        const { photo, caption } = this.props;

        this.props.photoCreate(photo, caption);
    }


    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Instagram</Title>
                    </Body>
                </Header>
                <View>
                    <CardSection>
                        <Input
                            label="Caption"
                            placeholder="Put Caption Here"
                            value={this.props.caption}
                            onChangeText={this.onCaptionChange}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Photo"
                            placeholder="Image URL"
                            value={this.props.photo}
                            onChangeText={this.onPhotoChange}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            + Post
                        </Button>
                    </CardSection>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { photo, caption } = state.photoForm;

    return { photo, caption };
};

export default connect(mapStateToProps, { photoUpdate, photoCreate })(PostPictForm);