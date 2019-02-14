import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './common'

class PhotoDetail extends Component {
    render() {
        const { photo, caption, email } = this.props.album;
        const { headerContentStyle,
            headerTextStyle,
            thumbnailStyle,
            thumbnailContainerStyle,
            imageStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image source={{ uri: 'https://' + photo }}
                            style={thumbnailStyle} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{email}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imageStyle} source={{ uri: 'https://' + photo }}>
                    </Image>
                </CardSection>
                <CardSection>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{email}</Text>
                        <Text>{caption}</Text>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default PhotoDetail;