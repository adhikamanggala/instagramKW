import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Container, Header, Left, Title, Body } from 'native-base'
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPhotoList } from '../actions'
import PhotoDetail from './getPhotoList'
class Timeline extends Component {
    componentDidMount() {
        this.props.getPhotoList();
    }
    renderPhoto = () => {
        var listPhoto = this.props.photoList.map((item) => {
            return (
                <PhotoDetail key={item.photo} album={item} />
            )
        });
        return listPhoto;
    }
    render() {

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Instagram</Title>

                    </Body>
                </Header>
                <ScrollView style={{ flex: 1 }}>
                    {this.renderPhoto()}
                </ScrollView>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.photoList);
    const photoList = _.map(state.photoList, (val, uid) => {
        return { ...val, uid };
    });

    console.log(photoList);

    return { photoList };
    //this.props = { ...this.props, ...returndarimapstatetoprops }
};
export default connect(mapStateToProps, { getPhotoList })(Timeline);